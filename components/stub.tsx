import { Nav } from "@/components/nav";

export function StubPage({ title, note }: { title: string; note: string }) {
  return (
    <div className="min-h-screen bg-concrete/60 p-3 md:p-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-bg-primary">
        <Nav />
        <div className="flex h-64 flex-col items-center justify-center gap-2 px-5 pb-10">
          <h1 className="font-heading text-2xl">{title}</h1>
          <p className="text-sm text-text-muted">{note}</p>
        </div>
      </div>
    </div>
  );
}
