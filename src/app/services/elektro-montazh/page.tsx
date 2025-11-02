import Link from "next/link";
import type { Metadata } from "next";
import styles from "../services.module.scss";
import RevealForm from "@/components/RevealForm/RevealForm";

export const metadata: Metadata = {
  title: "Електромонтаж у Києві — розводка, щит, автомати",
  description:
    "Професійний електромонтаж у приватних будинках і квартирах Києва. Розрахунок навантажень, схема, монтаж щита, підключення бойлера/плити.",
  alternates: { canonical: "/services/elektro-montazh" },
};

export default function ElectricalInstallationCard() {
  return (
    <main className={styles.wrap}>
      <Link href="/" className={styles.back}>← Назад</Link>
      <h1 className={styles.title}>Електромонтаж у приватних будинках та квартирах</h1>

      <h2>Що входить</h2>
      <ul className={styles.list}>
        <li>Повна проводка “з нуля” у новобудовах (по проекту або під ключ)</li>
        <li>Прокладання кабелів у стінах, підлозі, стелі</li>
        <li>Розведення електрики по кімнатах</li>
        <li>Підключення електрощитів, автоматів, УЗО</li>
        <li>Монтаж розеток, вимикачів, освітлення</li>
        <li>Розрахунок навантаження та схема електромережі</li>
        <li>Підключення потужних приладів (бойлер, плита, кондиціонер)</li>
      </ul>

      <RevealForm
        showLabel="Замовити монтаж"
        hideLabel="Сховати форму"
        message="Електромонтаж у приватних будинках та квартирах"
      />

      <hr className={styles.hr} />
    </main>
  );
}
