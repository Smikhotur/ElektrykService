import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name: string;
  phone: string;
  message: string;
};

function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function formatPlainText({ name, phone, message }: Payload) {
  return `Нове повідомлення з сайту

Ім'я: ${name}
Номер телефону: ${phone}

Повідомлення:
${message}
`;
}

// Безпечне екранування для MarkdownV2
function formatTelegramText({ name, phone, message }: Payload) {
  const esc = (s: string) =>
    s.replace(/([_\*\[\]\(\)~`>#+\-=|{}.!\\])/g, "\\$1"); // у т.ч. дефіс і бекслеш

  return [
    `*Нове повідомлення з сайту*`,
    `*Ім'я:* ${esc(name)}`,
    `*Номер телефону:* ${esc(phone)}`,
    `*Текст:*`,
    esc(message),
  ].join("\n");
}

async function sendEmail(payload: Payload) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = port === 465; // 465 — TLS, 587 — STARTTLS

  const tlsOptions =
    process.env.ALLOW_UNSAFE_TLS && process.env.NODE_ENV !== "production"
      ? { rejectUnauthorized: false } // тільки для локальної діагностики
      : undefined;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASS"),
    },
    tls: tlsOptions,
    connectionTimeout: 10_000,
    socketTimeout: 10_000,
  });

  await transporter.sendMail({
    // Gmail вимагає домен з акаунта у from
    from: `"${payload.name}" <${requiredEnv("SMTP_USER")}>`,
    to: requiredEnv("RECEIVER_EMAIL"),
    // replyTo має бути email; ставимо свою адресу, телефон — у subject/body
    replyTo: requiredEnv("SMTP_USER"),
    subject: `Заявка з сайту — ${payload.name}, ${payload.phone}`,
    text: formatPlainText(payload),
  });
}

async function sendTelegram(payload: Payload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatTelegramText(payload),
        parse_mode: "MarkdownV2",
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      throw new Error(`Telegram sendMessage failed: ${res.status} ${errText}`);
    }
  } catch (e) {
    console.error("[Telegram] error:", e);
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(req: Request) {
  try {
    const { name, phone, message } = (await req.json()) as Payload;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    await sendEmail({ name, phone, message });
    // Телеграм — фоново, не блокує відповідь
    sendTelegram({ name, phone, message }).catch((err) =>
      console.error("[Telegram] error:", err)
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send" },
      { status: 500 }
    );
  }
}
