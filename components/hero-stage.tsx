"use client";

import Image from "next/image";
import { TextStream } from "./block/text-stream";

const WORDS = ["Sneakers", "Streetwear", "Community", "Culture"];

export function HeroStage() {
  return (
    <section className="relative flex min-h-[calc(100svh-64px)] items-center justify-center overflow-hidden bg-bg-primary">
      <Image
        src="/assets/patterns/circuit-tile.png"
        alt=""
        fill
        className="object-cover opacity-[0.12]"
        priority={false}
      />

      {/* Scrolling words — stepped down behind the wordmark */}
      <div className="pointer-events-none absolute inset-0 flex items-center opacity-35">
        <TextStream
          items={WORDS}
          prefix=""
          fontSize="clamp(2rem, 6vw, 4rem)"
          fontWeight={600}
          height="100%"
          className="w-full"
        />
      </div>

      {/* Wordmark centerpiece */}
      <Image
        src="/assets/logo/wordmark.svg"
        alt="Circuits&Soles"
        width={866}
        height={288}
        className="relative z-10 h-auto w-[clamp(280px,60vw,640px)]"
        priority
      />
    </section>
  );
}
