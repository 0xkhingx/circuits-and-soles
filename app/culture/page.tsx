import { Nav, Badge } from "@/components/ui";
import { stories } from "@/lib/data";
import Link from "next/link";

export default function CulturePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-heading text-2xl">Culture</h1>
        <p className="mt-2 text-text-muted">Community stories, guides, drop calendars.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {stories.map((s) => (
            <Link key={s.slug} href={`/culture/${s.slug}`} className="overflow-hidden rounded-md border border-border">
              <div className="flex h-40 items-center justify-center bg-concrete/40 font-heading text-text-muted">{s.category}</div>
              <div className="p-4">
                <Badge tone="drop">{s.category}</Badge>
                <h2 className="mt-2 font-heading">{s.headline}</h2>
                <p className="mt-1 text-sm text-text-muted">{s.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
