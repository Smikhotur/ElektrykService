import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import SendForm from "./contacts/page";
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <>
      <section className="container">
        <h1 className={styles.mainTitle}>Електрик у Києві — електромонтажні роботи під ключ</h1>
        <p className={styles.subTitle}>
          Монтаж електрики в приватних будинках і квартирах, заміна проводки, освітлення,
          Smart Home. <br />Працюємо офіційно, гарантія.
        </p>

        <section style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <ServiceCard
            title="Електромонтаж у новобудовах"
            description="Розводка, електрощити, автомати, УЗО, підключення потужних приладів."
            href="/services/elektro-montazh"
          />
          <ServiceCard
            title="Ремонт і заміна проводки"
            description="Діагностика, часткова/повна заміна, усунення КЗ."
            href="/services/remont-provodky"
          />
          <ServiceCard
            title="Освітлення"
            description="Люстри, споти, LED, димери, сценарії та датчики руху."
            href="/services/osvitlennya"
          />
          <ServiceCard
            title="Розумний дім"
            description="Wi-Fi реле, розумні розетки, Google Home/Alexa, сценарії."
            href="/services/smart-home"
          />
        </section>
        <SendForm />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ElektrykService",
            image: "/logo2.png",
            url: "https://elektrykservice.com",
            telephone: "+380996863114",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Київ",
              addressCountry: "UA",
            },
            areaServed: "Kyiv, Ukraine",
            description:
              "Професійний електромонтаж у Києві. Розводка, освітлення, Smart Home, ремонт проводки. Гарантія та офіційний договір.",
            sameAs: [
              "https://facebook.com/elektrykservice",
              "https://instagram.com/elektrykservice",
            ],
          }),
        }}
      />
    </>
  );
}
