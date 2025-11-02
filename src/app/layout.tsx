import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";
import { Exo_2, Roboto } from 'next/font/google'

import "./globals.scss";
import { Header } from "@/components/Header/Header";


const exo2 = Exo_2({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-exo2',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  ...baseMetadata,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="uk"
      suppressHydrationWarning
      className={`${exo2.variable} ${roboto.variable}`}
    >
      <body suppressHydrationWarning>
        <Header />
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
