import { notFound } from "next/navigation";
import { Nav, Badge } from "@/components/ui";
import { stories } from "@/lib/data";

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug);
  if (!story) return notFound();
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-10">
        <Badge tone="drop">{story.category}</Badge>
        <h1 className="mt-3 font-heading text-2xl">{story.headline}</h1>
        <p className="mt-2 text-sm text-text-muted">{story.readTime} read</p>
        <div className="mt-6 flex h-64 items-center justify-center rounded-lg bg-concrete/40 font-heading text-text-muted">
          Cover image
        </div>
        <p className="mt-6 leading-relaxed">{story.excerpt} Full story body goes here — community-first editorial to differentiate the marketplace beyond a product grid.</p>
      </main>
    </>
  );
}
