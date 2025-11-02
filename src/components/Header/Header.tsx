'use client';

import React, { useState, useCallback, useEffect, useRef, useId } from 'react';
import cls from './Header.module.scss';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import Navigation from '../Navigation/Navigation';

interface IPropsHeader {
  propName?: string;
}

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const scrollY = window.scrollY;
    const original = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      overflow: document.body.style.overflow,
      width: document.body.style.width,
    };
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.position = original.position;
      document.body.style.top = original.top;
      document.body.style.left = original.left;
      document.body.style.right = original.right;
      document.body.style.overflow = original.overflow;
      document.body.style.width = original.width;
      window.scrollTo(0, scrollY);
    };
  }, [locked]);
}

export const Header: React.FC<IPropsHeader> = () => {
  const navId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  // shown = чи елемент присутній у DOM; open = стан для CSS-транзиції
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);

  const openMenu = useCallback(() => {
    setShown(true); // монтуємо
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setOpen(true)); // наступний кадр — запускаємо анімацію
    });
  }, []);

  const startCloseMenu = useCallback(() => {
    setOpen(false); // тригеримо згортання
  }, []);

  // Розмонтовуємо після завершення анімації закриття
  useEffect(() => {
    if (!shown) return;
    const el = panelRef.current;
    if (!el) return;
    const onEnd = (e: TransitionEvent) => {
      if (e.propertyName !== 'transform') return;
      if (!open) setShown(false);
    };
    el.addEventListener('transitionend', onEnd);
    return () => el.removeEventListener('transitionend', onEnd);
  }, [shown, open]);

  // Esc
  useEffect(() => {
    if (!shown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') startCloseMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shown, startCloseMenu]);

  // Лок скролу — коли відкрите (у процесі) меню
  useBodyScrollLock(shown);

  // Клік поза панеллю
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!panelRef.current) return;
      if (panelRef.current.contains(e.target as Node)) return;
      startCloseMenu();
    },
    [startCloseMenu],
  );

  return (
    <>
      <header className={cls.header}>
        <div className={cls.left}>
          <Image src={logo} alt="ElektrykService logo" width={76} height={38} priority />
        </div>

        <div className={cls.center}>
          <Navigation id={navId} variant="desktop" onNavigate={startCloseMenu} />
        </div>

        <a className={cls.tel} href="tel:+3809968683114">
          +38&nbsp;(099)&nbsp;686-31-14
        </a>

        <button
          className={`${cls.burger} ${open && shown ? cls.burgerOpen : ''}`}
          aria-label={open && shown ? 'Закрити меню' : 'Відкрити меню'}
          aria-controls={navId}
          aria-expanded={open && shown}
          onClick={() => (open && shown ? startCloseMenu() : openMenu())}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Оверлей + панель ПІД header (full-width, виїзд вниз) */}
      {shown && (
        <div className={cls.overlay} role="presentation" onClick={handleOverlayClick}>
          <div
            ref={panelRef}
            className={`${cls.mobilePanel} ${open ? cls.open : ''}`}
            role="dialog"
            aria-modal="true"
          >
            <Navigation id={navId} variant="mobile" onNavigate={startCloseMenu} />
          </div>
        </div>
      )}
    </>
  );
};
