'use client';

import React, { useState, useCallback, useId } from 'react';
import cls from './Header.module.scss';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import Navigation from '../Navigation/Navigation';

interface IPropsHeader {
  propName?: string;
}

export const Header: React.FC<IPropsHeader> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navId = useId();

  const toggleMenu = useCallback(() => setIsMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className={cls.header}>
      <div className={cls.left}>
        <Image
          src={logo}
          alt="ElektrykService logo"
          width={76}
          height={38}
          priority
        />
      </div>

      {/* Десктопна навігація */}
      <div className={cls.center}>
        <Navigation id={navId} variant="desktop" onNavigate={closeMenu} />
      </div>

      <a className={cls.tel} href="tel:+3809968683114">
        +38&nbsp;(099)&nbsp;686-31-14
      </a>

      {/* Бургер-кнопка для ≤650px */}
      <button
        className={cls.burger}
        aria-label="Відкрити меню"
        aria-controls={navId}
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Мобільна панель, що виїжджає з-під header */}
      <div
        className={`${cls.mobilePanel} ${isMenuOpen ? cls.open : ''}`}
        role="dialog"
        aria-modal="false"
      >
        <Navigation id={navId} variant="mobile" onNavigate={closeMenu} />
      </div>
    </header>
  );
};
