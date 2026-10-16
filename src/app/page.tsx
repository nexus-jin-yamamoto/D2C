"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { useState, type ReactNode } from "react";
import {
  Eye,
  LockSimple,
  Cloud,
  Heart,
  Bag,
  Wind,
  Cube,
  ArrowsIn,
} from "@phosphor-icons/react";

const PRODUCTS = [
  {
    name: "くまさん",
    desc: "やさしくて癒し系",
    img: "https://picsum.photos/seed/mofull-kuma/800/1000",
  },
  {
    name: "ねこちゃん",
    desc: "シンプルでおしゃれ",
    img: "https://picsum.photos/seed/mofull-neko/600/750",
  },
  {
    name: "きょうりゅう",
    desc: "個性的で写真映え",
    img: "https://picsum.photos/seed/mofull-dino/600/750",
  },
  {
    name: "うさぎさん",
    desc: "やわらかくてかわいい",
    img: "https://picsum.photos/seed/mofull-usagi/800/1000",
  },
];

const FEATURES = [
  { icon: Eye, title: "顔が出せる窓口", desc: "メッシュ・ロールアップ対応" },
  {
    icon: LockSimple,
    title: "飛び出し防止フック",
    desc: "ハーネスにしっかり固定",
  },
  { icon: Cloud, title: "ふかふかクッション", desc: "取り外して洗える" },
  {
    icon: Heart,
    title: "肩にやさしい幅広ベルト",
    desc: "長時間でも疲れにくい",
  },
  { icon: Bag, title: "便利なサイドポケット", desc: "スマホやボトルが入る" },
  { icon: Wind, title: "通気性の良い設計", desc: "メッシュで快適" },
  { icon: Cube, title: "安定する底板", desc: "型崩れしにくい設計" },
  {
    icon: ArrowsIn,
    title: "折りたたみ可能",
    desc: "使わない時はコンパクトに",
  },
];

const SIZES = [
  {
    label: "M",
    weight: "~5kg",
    target: "猫・小型犬向け",
    dim: "横38 x 高さ24 x 奥行18 cm",
  },
  {
    label: "L",
    weight: "~8kg",
    target: "小型犬・やや大きめ",
    dim: "横42 x 高さ28 x 奥行20 cm",
  },
];

const SCENES = [
  {
    label: "カフェ・ランチ",
    img: "https://picsum.photos/seed/mf-cafe/600/800",
  },
  { label: "街歩き", img: "https://picsum.photos/seed/mf-street/600/800" },
  {
    label: "旅行・おでかけ",
    img: "https://picsum.photos/seed/mf-travel/600/800",
  },
  {
    label: "電車・移動",
    img: "https://picsum.photos/seed/mf-train/600/800",
  },
];

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MofullPage() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#141820] text-[#2A2F3B] dark:text-[#E4E2DF] min-h-[100dvh] overflow-x-hidden">
      {/* Nav */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF9F6]/90 dark:bg-[#141820]/90 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : ""
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-[family-name:var(--font-mf-display)] text-xl font-extrabold tracking-tight text-[#4A7856] dark:text-[#6AAF7C]"
          >
            mofull
          </a>
          <div className="flex items-center gap-6">
            <a
              href="#lineup"
              className="hidden md:block text-sm font-medium text-[#8B95A5] hover:text-[#2A2F3B] dark:hover:text-white transition-colors"
            >
              ラインナップ
            </a>
            <a
              href="#features"
              className="hidden md:block text-sm font-medium text-[#8B95A5] hover:text-[#2A2F3B] dark:hover:text-white transition-colors"
            >
              こだわり
            </a>
            <a
              href="#size"
              className="hidden md:block text-sm font-medium text-[#8B95A5] hover:text-[#2A2F3B] dark:hover:text-white transition-colors"
            >
              サイズ
            </a>
            <a
              href="#purchase"
              className="bg-[#4A7856] dark:bg-[#5A9268] text-white px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              購入する
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="md:min-h-[100dvh] flex items-center pt-20 md:pt-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 w-full grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 items-center py-10 md:py-0">
          <div className="order-2 md:order-1">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-[family-name:var(--font-mf-display)] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#4A7856] dark:text-[#6AAF7C]">
                mofull
              </p>
              <p className="text-base text-[#8B95A5] mt-1 font-medium tracking-wide">
                いっしょに、どこまでも。
              </p>
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mt-8"
            >
              うちの子が主役になる
              <br className="hidden md:block" />
              ショルダーバッグ。
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[#6B7B8D] dark:text-[#9BA5B4] mt-5 max-w-[34ch] leading-relaxed"
            >
              カフェにも、旅行にも、いつものおでかけがもっと特別になる。かわいいだけじゃない、使いやすさもこだわりました。
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.36,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8"
            >
              <a
                href="#lineup"
                className="inline-flex items-center gap-2 bg-[#4A7856] dark:bg-[#5A9268] text-white px-8 py-3.5 rounded-full font-bold text-base hover:opacity-90 transition-all active:scale-[0.97]"
              >
                商品を見る
                <span className="text-lg">→</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="order-1 md:order-2 relative aspect-[3/2] md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#EDF3EE] dark:bg-[#1E2A22]"
          >
            {/* TODO: 実際の商品写真に差し替え */}
            <img
              src="https://picsum.photos/seed/mofull-hero-pet/800/1000"
              alt="mofullペットキャリーバッグ"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="lineup" className="py-24 md:py-32 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4A7856] dark:text-[#6AAF7C] mb-3">
              Lineup
            </p>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              4つのデザイン、4つの個性。
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr] gap-3 md:gap-5 mt-12">
            {PRODUCTS.slice(0, 2).map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#EDF3EE] dark:bg-[#1E2A22] aspect-[4/5]">
                  <img
                    src={p.img}
                    alt={`${p.name}デザインのペットキャリーバッグ`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/50 to-transparent">
                    <p className="font-[family-name:var(--font-mf-display)] text-white font-bold text-sm md:text-lg">
                      {p.name}
                    </p>
                    <p className="text-white/70 text-xs md:text-sm mt-0.5">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-[1fr_1.6fr] gap-3 md:gap-5 mt-3 md:mt-5">
            {PRODUCTS.slice(2, 4).map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#EDF3EE] dark:bg-[#1E2A22] aspect-[4/5]">
                  <img
                    src={p.img}
                    alt={`${p.name}デザインのペットキャリーバッグ`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/50 to-transparent">
                    <p className="font-[family-name:var(--font-mf-display)] text-white font-bold text-sm md:text-lg">
                      {p.name}
                    </p>
                    <p className="text-white/70 text-xs md:text-sm mt-0.5">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-24 md:py-32 bg-[#EDF3EE] dark:bg-[#1A2420] scroll-mt-20"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              こだわりのポイント
            </h2>
            <p className="text-[#6B7B8D] dark:text-[#9BA5B4] mt-3 max-w-[40ch]">
              ペットの快適さと飼い主の使いやすさ、両方に妥協しません。
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeIn key={f.title} delay={i * 0.04}>
                  <div className="bg-white dark:bg-[#242A36] rounded-2xl p-5 md:p-6 h-full transition-transform duration-200 hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-xl bg-[#4A7856]/10 dark:bg-[#5A9268]/20 flex items-center justify-center text-[#4A7856] dark:text-[#6AAF7C] mb-4">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <p className="font-bold text-sm md:text-base leading-snug">
                      {f.title}
                    </p>
                    <p className="text-[#8B95A5] text-xs md:text-sm mt-1.5 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Size */}
      <section id="size" className="py-24 md:py-32 scroll-mt-20">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8">
          <FadeIn className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              2つのサイズ
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-12">
            {SIZES.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div
                  className={`rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 transition-transform duration-200 hover:-translate-y-1 ${
                    i === 0
                      ? "border-[#4A7856]/20 bg-[#EDF3EE] dark:bg-[#1E2A22] dark:border-[#5A9268]/30"
                      : "border-[#D4886C]/20 bg-[#FDF0EB] dark:bg-[#2A2018] dark:border-[#D4886C]/30"
                  }`}
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span
                      className={`font-[family-name:var(--font-mf-display)] text-4xl md:text-5xl font-extrabold ${
                        i === 0
                          ? "text-[#4A7856] dark:text-[#6AAF7C]"
                          : "text-[#D4886C]"
                      }`}
                    >
                      {s.label}
                    </span>
                    <span className="text-sm font-bold text-[#8B95A5]">
                      {s.weight}
                    </span>
                  </div>
                  <p className="font-bold text-base">{s.target}</p>
                  <p className="text-[#8B95A5] text-sm mt-2">{s.dim}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Scenes */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              こんなシーンで
            </h2>
          </FadeIn>

          <div className="flex gap-3 md:gap-4 mt-12 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible">
            {SCENES.map((s, i) => (
              <FadeIn
                key={s.label}
                delay={i * 0.06}
                className="min-w-[68vw] md:min-w-0 snap-center"
              >
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4]">
                  <img
                    src={s.img}
                    alt={`${s.label}のシーン`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                    <p className="text-white font-bold text-sm md:text-base">
                      {s.label}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="purchase"
        className="py-24 md:py-32 bg-[#4A7856] dark:bg-[#3A6246] scroll-mt-20"
      >
        <div className="max-w-[800px] mx-auto px-5 md:px-8 text-center">
          <FadeIn>
            <p className="text-white/60 text-sm font-medium">価格（税込）</p>
            <p className="font-[family-name:var(--font-mf-display)] text-5xl md:text-6xl font-extrabold text-white mt-2">
              ¥12,800
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-white/80 mt-6 text-lg leading-relaxed max-w-[28ch] mx-auto">
              うちの子と新しい景色を見にいこう。
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-[#4A7856] px-10 py-4 rounded-full font-bold text-base mt-10 hover:bg-white/90 transition-all active:scale-[0.97]"
            >
              購入する
              <span className="text-lg">→</span>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#2A2F3B]/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="font-[family-name:var(--font-mf-display)] text-lg font-extrabold text-[#4A7856] dark:text-[#6AAF7C]"
          >
            mofull
          </a>
          <p className="text-[#8B95A5] text-xs">
            &copy; 2026 mofull. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
