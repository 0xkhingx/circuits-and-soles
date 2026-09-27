"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/culture", label: "Culture" },
  { href: "/about", label: "About" },
];

// v1: logged-out static state. Swap to avatar -> /account when authed.
const isLoggedIn = false;
const cartCount = 0;

const MLink = motion(Link);
const tapProps = {
  whileTap: { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Hover feedback only where hover exists — touch taps skip it.
  const canHover = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    []
  );
  const hoverProps = canHover ? { whileHover: { scale: 1.03 } } : {};

  return (
    <div className="relative">
      <div className="relative flex items-center justify-between px-5 py-2.5 md:px-8">
        {/* Left cluster: core IA links */}
        <div className="flex min-w-0 items-center gap-3">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/60 backdrop-blur-xl backdrop-saturate-150 text-charcoal shadow-beautiful-sm lg:hidden"
          >
            {menuOpen ? <CloseIcon size={18} stroke={2} /> : <MenuIcon size={18} stroke={2} />}
          </button>
          <nav className="hidden min-w-0 items-center gap-8 whitespace-nowrap text-[13px] tracking-wide text-charcoal lg:flex">
            {links.map((l) => (
              <Link key={l.label} href={l.href} className="shrink-0 hover:opacity-60">
                {l.label}
              </Link>
            ))}
          </nav>
          {/* Mobile: Shop link stays visible next to the menu button */}
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
          <MLink
            href="/shop"
            aria-label="Search"
            {...tapProps}
            {...hoverProps}
            className="flex size-10 items-center justify-center rounded-full border border-black/10 bg-white/60 backdrop-blur-xl backdrop-saturate-150 text-charcoal shadow-beautiful-sm"
          >
            <SearchIcon size={18} stroke={2} />
          </MLink>
          {isLoggedIn ? (
            <MLink
              href="/account"
              aria-label="Account"
              {...tapProps}
              {...hoverProps}
              className="flex size-10 items-center justify-center rounded-full bg-charcoal text-white"
            >
              <UserIcon size={18} stroke={2} />
            </MLink>
          ) : (
            <MLink
              href="/login"
              {...tapProps}
              {...hoverProps}
              className="hidden h-10 items-center rounded-full border border-black/10 bg-white/60 backdrop-blur-xl backdrop-saturate-150 px-5 text-[13px] font-medium text-charcoal shadow-beautiful-sm sm:flex"
            >
              Sign in
            </MLink>
          )}
          <MLink
            href="/checkout"
            {...tapProps}
            {...hoverProps}
            className="flex h-10 items-center gap-1.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-xl backdrop-saturate-150 pl-4 pr-1.5 text-[13px] font-medium text-charcoal shadow-beautiful-sm"
          >
            Cart
            <span className="relative flex size-6 items-center justify-center rounded-full bg-charcoal text-white">
              <ShoppingBagIcon size={13} stroke={2} />
              <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-sage font-heading text-[9px] text-white">
                {cartCount}
              </span>
            </span>
          </MLink>
        </div>
      </div>

      {/* Mobile dropdown — same links, no hidden IA */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-x-5 top-full z-30 rounded-xl border border-black/10 bg-white/60 backdrop-blur-xl backdrop-saturate-150 p-2 shadow-beautiful-sm lg:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 font-heading text-sm text-charcoal hover:bg-concrete/40"
              >
                {l.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
