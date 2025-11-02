import Link from "next/link";
import type { Metadata } from "next";
import styles from "../services.module.scss";
import RevealForm from "@/components/RevealForm/RevealForm";

export const metadata: Metadata = {
  title: "Освітлення — люстри, LED, датчики, сценарії",
  description:
    "Монтаж освітлення в квартирах і будинках Києва: люстри, споти, LED-стрічки, димери, датчики руху, програмоване керування.",
  alternates: { canonical: "/services/osvitlennya" },
};

export default function LightingCard() {
  return (
    <main className={styles.wrap}>
      <Link href="/" className={styles.back}>← Назад</Link>
      <h1 className={styles.title}>Освітлення</h1>
      <p className={styles.lead}>
        Встановлення освітлення під будь-які завдання — від люстр і спотів до LED-підсвітки та розумного керування.
      </p>

      <h2>Що входить</h2>
      <ul className={styles.list}>
        <li>Монтаж люстр, світильників, спотів, LED-стрічок</li>
        <li>Сценарії освітлення (тепле/холодне світло, димери)</li>
        <li>Вуличне освітлення, датчики руху</li>
        <li>Програмоване керування освітленням</li>
      </ul>

      <RevealForm
        showLabel="Замовити монтаж"
        hideLabel="Сховати форму"
        message="Освітлення"
      />
      
      <hr className={styles.hr} />
    </main>
  );
}
