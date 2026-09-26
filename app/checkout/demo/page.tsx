import { Nav } from "@/components/ui";

export default function CheckoutDemo() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-md px-4 py-10 text-center">
        <h1 className="font-heading text-2xl">Stripe test checkout</h1>
        <p className="mt-3 text-sm text-text-muted">
          Portfolio demo only — no live keys. Public buyers check out via WhatsApp.
          Wire `stripe` + `/api/webhooks/stripe` here next.
        </p>
      </main>
    </>
  );
}
