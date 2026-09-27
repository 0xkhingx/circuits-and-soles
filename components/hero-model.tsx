"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroModel() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <Image
        src="/hero-model.png"
        alt="Streetwear fit — black sweatshirt, wide denim, white sneakers"
        width={720}
        height={900}
        className="relative h-[calc(100svh-96px)] w-auto object-contain"
        priority
      />
    </motion.div>
  );
}
