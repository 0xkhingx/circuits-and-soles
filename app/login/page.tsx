import { Nav } from "@/components/ui";

export default function LoginPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-sm px-4 py-10">
        <h1 className="font-heading text-2xl">Login</h1>
        <p className="mt-2 text-sm text-text-muted">Light auth in v1 — favorites + orders only.</p>
        <form className="mt-6 space-y-3">
          <input placeholder="Email" type="email" className="w-full rounded-md border border-border px-4 py-2 text-sm" />
          <input placeholder="Password" type="password" className="w-full rounded-md border border-border px-4 py-2 text-sm" />
          <button className="w-full rounded-md bg-sage py-2 font-heading text-sm text-white">Login (stub — wire Supabase/NextAuth next)</button>
        </form>
      </main>
    </>
  );
}
