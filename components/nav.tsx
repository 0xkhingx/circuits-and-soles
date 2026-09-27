import Image from "next/image";
import Link from "next/link";
import { SearchIcon, UserIcon, ShoppingBagIcon } from "./icons";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/culture", label: "Culture" },
  { href: "/about", label: "About" },
];

// v1: logged-out static state. Swap to avatar -> /account when authed.
const isLoggedIn = false;
const cartCount = 0;

export function Nav() {
  return (
    <div className="relative flex items-center justify-between px-5 py-4 md:px-8">
      {/* Left cluster: core IA links */}
      <div className="flex min-w-0 items-center">
        <nav className="hidden min-w-0 items-center gap-8 whitespace-nowrap text-[13px] tracking-wide text-charcoal lg:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="shrink-0 hover:opacity-60">
              {l.label}
            </Link>
          ))}
        </nav>
        {/* Mobile: Shop link stays visible, rest in footer/menu later */}
        <Link href="/shop" className="text-[13px] tracking-wide text-charcoal lg:hidden">
          Shop
        </Link>
      </div>

      {/* Center: logo mark only, pinned to the bar's exact midpoint */}
      <Link
        href="/"
        aria-label="Circuits&Soles home"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/assets/logo/symbol.svg"
          alt=""
          width={34}
          height={34}
          className="h-8 w-8"
          priority
        />
      </Link>

      {/* Right cluster: search trigger + account + cart */}
      <div className="flex shrink-0 items-center justify-end gap-2">
        <Link
          href="/shop"
          aria-label="Search"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-charcoal"
        >
          <SearchIcon size={18} stroke={2} />
        </Link>
        {isLoggedIn ? (
          <Link
            href="/account"
            aria-label="Account"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-white"
          >
            <UserIcon size={18} stroke={2} />
          </Link>
        ) : (
          <Link
            href="/login"
            className="hidden h-11 items-center rounded-full border border-black/10 bg-white px-5 text-[13px] font-medium text-charcoal sm:flex"
          >
            Sign in
          </Link>
        )}
        <Link
          href="/checkout"
          className="flex h-11 items-center gap-1.5 rounded-full border border-black/10 bg-white pl-4 pr-1.5 text-[13px] font-medium text-charcoal"
        >
          Cart
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-charcoal text-white">
            <ShoppingBagIcon size={13} stroke={2} />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-sage font-heading text-[9px] text-white">
              {cartCount}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
