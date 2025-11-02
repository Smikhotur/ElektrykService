import type { Metadata } from "next";
import styles from "./about.module.scss";

export const metadata: Metadata = {
  title: "ElektrykService — про нас | Електрик у Києві",
  description:
    "ElektrykService: електромонтаж у Києві та області. 8+ років досвіду, гарантія, офіційні договори. Монтаж щитів, проводки, освітлення, Smart Home.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className={styles.wrap}>
      <section className={styles.hero}>
        <span className={styles.badge}>Про компанію</span>
        <h1 className={styles.title}>ElektrykService — команда електриків для дому та бізнесу</h1>
        <p className={styles.lead}>
          Проєктуємо та монтуємо електрику «під ключ»: від розводки й щитів до освітлення та Smart&nbsp;Home.
          Працюємо офіційно, надаємо гарантію та дотримуємось норм ПУЕ/ДБН.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statValue}>8+</div>
            <div className={styles.statLabel}>років досвіду</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>300+</div>
            <div className={styles.statLabel}>реалізованих обʼєктів</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>гарантія робіт</div>
          </div>
        </div>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>Що ми робимо</h2>
          <ul className={styles.list}>
            <li>Електромонтаж у новобудовах і квартирах</li>
            <li>Монтаж щитів, автоматика, УЗО, диф.автомати</li>
            <li>Освітлення: люстри, споти, LED, вуличне</li>
            <li>Ремонт і заміна проводки, діагностика</li>
            <li>Smart Home: Wi-Fi реле, розетки, сценарії</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h2>Чому ElektrykService</h2>
          <ul className={styles.list}>
            <li>План робіт і прозорий кошторис до старту</li>
            <li>Дотримуємось ПУЕ/ДБН, сертифіковані матеріали</li>
            <li>Гарантія та післямонтажна підтримка</li>
            <li>Охайний монтаж і прибирання після робіт</li>
            <li>Комунікація: пояснюємо простими словами</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h2>Працюємо по Києву та області</h2>
          <p className={styles.text}>
            Виїзд по Києву, Ірпінь, Буча, Вишгород, Бровари, Біла Церква та інші локації за погодженням.
          </p>
          <p className={styles.muted}>Термінові заявки — за наявності вільного вікна.</p>
        </article>
      </section>

      <section className={styles.process}>
        <h2 className={styles.h2}>Як ми працюємо</h2>
        <ol className={styles.steps}>
          <li><b>Заявка:</b> коротко описуєте об’єкт та задачі</li>
          <li><b>Огляд і кошторис:</b> виїзд/відеозвʼязок, прорахунок</li>
          <li><b>Договір:</b> фіксуємо обсяг, вартість, строки</li>
          <li><b>Монтаж:</b> охайне виконання, проміжні звіти</li>
          <li><b>Перевірка:</b> тест, акти, гарантія та інструктаж</li>
        </ol>
      </section>

      <section className={styles.ctaBlock}>
        <a className={styles.cta} href="/contacts">Отримати консультацію</a>
        <p className={styles.muted}>Або зателефонуйте: <a className={styles.tel} href="tel:+380996868311">+38&nbsp;(099)&nbsp;686-31-14</a></p>
      </section>

      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ElektrykService",
            url: "/about",
            areaServed: "Kyiv, Ukraine",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+380996863114",
              contactType: "customer service",
              areaServed: "UA",
              availableLanguage: ["uk", "ru"],
            },
            brand: "ElektrykService",
            slogan: "Електрика під ключ у Києві",
          }),
        }}
      />
    </main>
  );
}
