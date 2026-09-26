import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-concrete/60 p-3 md:p-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-bg-primary">
        <Nav />
        {/* Hero removed — navbar focus. Empty canvas below. */}
        <div className="flex h-64 items-center justify-center px-5 pb-10">
          <p className="text-sm text-text-muted">Navbar canvas — hero goes here next.</p>
        </div>
      </div>
    </div>
  );
}
