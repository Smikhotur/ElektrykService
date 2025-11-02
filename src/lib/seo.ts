import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: "Електрик Київ — електромонтаж під ключ",
  description:
    "Професійний електрик у Києві: електромонтаж, заміна проводки, освітлення, Smart Home. Гарантія, прозорі ціни.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    type: "website",
    title: "Електрик Київ — електромонтаж під ключ",
    description:
      "Електромонтаж, ремонт проводки, освітлення та розумний дім. Дзвоніть!",
    url: "https://your-domain.com",
    siteName: "Електрик Київ",
  },
  alternates: { canonical: "/" },
};
