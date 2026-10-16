import type { Metadata } from "next";
import { Nunito, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-mf-display",
  display: "swap",
});

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-mf-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mofull | いっしょに、どこまでも。",
  description:
    "うちの子が主役になるペットキャリーショルダーバッグ。くまさん・ねこちゃん・きょうりゅう・うさぎさんの4デザイン。",
  openGraph: {
    title: "mofull | いっしょに、どこまでも。",
    description:
      "うちの子が主役になるペットキャリーショルダーバッグ。カフェにも旅行にも。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${nunito.variable} ${zenMaru.variable}`}>
      <body
        style={{
          fontFamily:
            "var(--font-mf-body), 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
