"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/where-we-work", label: "Where We Work" },
  { href: "/programmes", label: "Programmes" },
  { href: "/projects", label: "Projects" },
  { href: "/impact", label: "Impact" },
  { href: "/stories", label: "Stories" },
  { href: "/get-involved", label: "Get Involved" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-mist-50/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-5 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-lg text-forest-900" onClick={() => setOpen(false)}>
          Save Kenya
          <span className="block text-xs tracking-wide text-forest-500 -mt-1">Water Towers</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-forest-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 transition-colors"
          >
            Donate
          </Link>
          <button
            type="button"
            className="lg:hidden p-2 text-forest-900"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="lg:hidden fixed inset-0 top-16 bg-mist-50 px-5 py-8 flex flex-col gap-1"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-xl font-display text-forest-900 border-b border-line"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex justify-center px-5 py-3 text-sm font-medium bg-clay-600 text-paper"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}
