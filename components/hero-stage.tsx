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

      {/* Scrolling words — visuals removed, type carries the hero */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <TextStream
          items={WORDS}
          prefix="Circuits&Soles"
          fontSize="clamp(3rem, 10vw, 7rem)"
          fontWeight={600}
          height="100%"
          className="w-full"
        />
      </div>
    </section>
  );
}
