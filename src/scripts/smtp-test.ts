import nodemailer from "nodemailer";
(async () => {
  const t = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
    logger: true, debug: true,
    tls: { rejectUnauthorized: false },
  });
  await t.verify();
  await t.sendMail({
    from: process.env.SMTP_USER!,
    to: process.env.RECEIVER_EMAIL!,
    subject: "SMTP TEST",
    text: "hello",
  });
  console.log("OK");
})();


// for test
// npx tsx -r dotenv/config src/scripts/smtp-test.ts
