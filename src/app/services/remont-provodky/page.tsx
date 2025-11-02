import Link from "next/link";
import type { Metadata } from "next";
import styles from "../services.module.scss";
import RevealForm from "@/components/RevealForm/RevealForm";

export const metadata: Metadata = {
  title: "Ремонт і заміна проводки — діагностика, усунення КЗ",
  description:
    "Часткова або повна заміна старої проводки у квартирах та будинках Києва. Діагностика, усунення коротких замикань, перевірка контактів.",
  alternates: { canonical: "/services/remont-provodky" },
};

export default function WiringCard() {
  return (
    <main className={styles.wrap}>
      <Link href="/" className={styles.back}>← Назад</Link>
      <h1 className={styles.title}>Ремонт і заміна проводки</h1>
      <h2>Що входить</h2>
      <ul className={styles.list}>
        <li>Часткова або повна заміна старої проводки</li>
        <li>Демонтаж старих кабелів, установка нових трас</li>
        <li>Виправлення несправностей, коротких замикань</li>
        <li>Діагностика електромережі</li>
        <li>Перевірка автоматів, контактів, з’єднань</li>
      </ul>

      <RevealForm
        showLabel="Замовити монтаж"
        hideLabel="Сховати форму"
        message="Ремонт і заміна проводки"
      />

      <hr className={styles.hr} />
    </main>
  );
}
