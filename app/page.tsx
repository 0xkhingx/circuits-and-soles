import Image from "next/image";
import { Nav } from "@/components/nav";
import { HeroStage } from "@/components/hero-stage";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-primary">
      {/* Shared texture — one continuous surface behind nav + hero, no seam */}
      <Image
        src="/assets/patterns/circuit-tile.png"
        alt=""
        fill
        className="object-cover opacity-[0.12]"
        priority={false}
      />
      <div className="relative">
        <Nav />
        <HeroStage />
      </div>
    </div>
  );
}
