'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';

type NavVariant = 'desktop' | 'mobile';

interface NavigationProps {
  id?: string;                 // для aria-controls
  variant?: NavVariant;        // вигляд: desktop / mobile
  onNavigate?: () => void;     // закрити меню після кліку
}

export default function Navigation({ id, variant = 'desktop', onNavigate }: NavigationProps) {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `${styles.link} ${pathname === href ? styles.active : ''}`;

  return (
    <nav
      id={id}
      className={`${styles.nav} ${variant === 'mobile' ? styles.mobile : styles.desktop}`}
      aria-label="Основна навігація"
    >
      <ul className={styles.list}>
        <li>
          <Link
            href="/"
            className={linkClass('/')}
            aria-current={pathname === '/' ? 'page' : undefined}
            onClick={onNavigate}
          >
            Головна
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={linkClass('/about')}
            aria-current={pathname.includes('/about') ? 'page' : undefined}
            onClick={onNavigate}
          >
            Про компанію
          </Link>
        </li>
      </ul>
    </nav>
  );
}
