import { Nav } from "@/components/nav";
import { HeroStage } from "@/components/hero-stage";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Nav />
      <HeroStage />
    </div>
  );
}
