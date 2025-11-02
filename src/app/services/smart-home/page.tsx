import Link from "next/link";
import type { Metadata } from "next";
import styles from "../services.module.scss";
import RevealForm from "@/components/RevealForm/RevealForm";

export const metadata: Metadata = {
  title: "Розумний дім — Wi-Fi реле, розетки, сценарії",
  description:
    "Інтеграція Smart Home: керування освітленням, безпека (рух, дим, протікання), Google Home / Alexa, автоматичні сценарії.",
  alternates: { canonical: "/services/smart-home" },
};

export default function SmartHomeCard() {
  return (
    <main className={styles.wrap}>
      <Link href="/" className={styles.back}>← Назад</Link>
      <h1 className={styles.title}>Розумний дім (Smart Home)</h1>
      <p className={styles.lead}>
        Автоматизуємо освітлення та електроприлади, налаштовуємо керування зі смартфона, інтегруємо Google Home або Alexa.
      </p>

      <h2>Що входить</h2>
      <ul className={styles.list}>
        <li>Розумне освітлення, керування зі смартфону</li>
        <li>Датчики безпеки: рух, протікання, дим</li>
        <li>Інтеграція з Google Home / Alexa</li>
        <li>Автоматичні сценарії (“Я вдома”, “Ніч”, “Відпустка”)</li>
      </ul>

      <RevealForm
        showLabel="Замовити монтаж"
        hideLabel="Сховати форму"
        message="Розумний дім (Smart Home)"
      />
      <hr className={styles.hr} />
    </main>
  );
}
