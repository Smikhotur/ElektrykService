import Link from "next/link";
import styles from "./ServiceCard.module.scss";

interface Props {
  title: string;
  description: string;
  href?: string;
}
export const ServiceCard = ({ title, description, href = "#" }: Props) => (
  <Link className={styles.card} href={href} aria-label={title}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.desc}>{description}</p>
  </Link>
);
