import { Nav } from "@/components/ui";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-heading text-2xl">About Circuits&Soles</h1>
        <p className="mt-4 leading-relaxed">
          Community-first streetwear catalog. We start curated — every listing verified —
          and grow to peer-to-peer once trust infrastructure exists. v1 is catalog MVP;
          v2 adds seller onboarding + verification.
        </p>
      </main>
    </>
  );
}
