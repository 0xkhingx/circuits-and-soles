import { Nav } from "@/components/nav";
import { HeroStage } from "@/components/hero-stage";

export default function Home() {
  return (
    <div className="min-h-screen bg-concrete/60 p-3 md:p-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-bg-primary">
        <Nav />
        <HeroStage />
      </div>
    </div>
  );
}
