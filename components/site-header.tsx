"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    groups: [
      {
        title: "About",
        items: [
          { href: "/who-we-are", label: "Our story" },
          { href: "/who-we-are#team", label: "Our team" },
        ],
      },
    ],
  },
  {
    label: "Programs",
    groups: [
      {
        title: "Programmes",
        items: [
          { href: "/programmes/agroforestry-reforestation", label: "Landscape restoration and ecosystem health" },
          { href: "/programmes/water-source-protection", label: "Water source protection" },
          { href: "/programmes/regenerative-agriculture", label: "Livelihood improvement" },
          { href: "/programmes/education-awareness", label: "Education & awareness" },
          { href: "/programmes/gender-intergenerational-equity", label: "Social inclusion" },
        ],
      },
    ],
  },
  {
    label: "Projects",
    groups: [
      {
        title: "Project portfolio",
        items: [
          { href: "/projects", label: "All projects" },
        ],
      },
    ],
  },
  {
    label: "Partnerships",
    groups: [
      {
        title: "Partners",
        items: [
          { href: "/get-involved#partners", label: "FAO" },
          { href: "/get-involved#partners", label: "AFR100" },
          { href: "/get-involved#partners", label: "WRI" },
          { href: "/get-involved#partners", label: "TerraFund AFR100" },
          { href: "/get-involved#partners", label: "The Restoration Alliance" },
          { href: "/get-involved#partners", label: "The Conservation Alliance of Kenya" },
          { href: "/get-involved#partners", label: "KFS" },
          { href: "/get-involved#partners", label: "KUCCG" },
        ],
      },
    ],
  },
  { label: "Get involved", href: "/get-involved" },
  { label: "Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const isLinkActive = (href: string) => {
    const route = href.split("#")[0];
    return pathname === route || pathname.startsWith(`${route}/`);
  };

  const isMenuActive = (item: (typeof NAV_ITEMS)[number]) =>
    item.href
      ? isLinkActive(item.href)
      : item.groups?.some((group) =>
          group.items.some((link) => isLinkActive(link.href)),
        ) ?? false;

  const openDropdown = (label: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(label);
  };

  const closeDropdown = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenMenu(null);
    }, 120);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line/50 bg-mist-50/95 shadow-[0_4px_18px_rgba(22,40,31,0.025)] backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <div className="relative h-16 w-16 overflow-hidden bg-transparent sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20">
            <Image
              src="/logo/mylogo/logo2.png"
              alt="Save Kenya Water Towers logo"
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
          onMouseLeave={closeDropdown}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpenMenu(null);
            }
          }}
        >
          {NAV_ITEMS.map((item) => {
            if (item.href) {
              const active = isLinkActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-mist-100 hover:text-forest-900 ${
                    active ? "bg-mist-100 text-clay-700" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const active = isMenuActive(item);

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={closeDropdown}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-mist-100 hover:text-forest-900 ${
                    active ? "bg-mist-100 text-clay-700" : "text-ink-soft"
                  }`}
                  onFocus={() => openDropdown(item.label)}
                  onMouseEnter={() => openDropdown(item.label)}
                  onClick={() => setOpenMenu((current) => (current === item.label ? null : item.label))}
                  aria-expanded={openMenu === item.label}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  <span aria-hidden="true" className="text-[10px] leading-none">▾</span>
                </button>

                {openMenu === item.label && (
                  <div
                    className="absolute left-1/2 top-full z-50 mt-3 w-[620px] -translate-x-1/2 rounded-[1.75rem] border border-line/50 bg-paper p-3 shadow-[0_14px_30px_rgba(22,40,31,0.06)]"
                    onMouseEnter={() => {
                      if (closeTimeoutRef.current) {
                        window.clearTimeout(closeTimeoutRef.current);
                        closeTimeoutRef.current = null;
                      }
                    }}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="grid gap-3 md:grid-cols-2">
                      {item.groups?.map((group) => (
                        <div key={group.title} className="rounded-[1.35rem] border border-line/50 bg-mist-50 p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay-700">{group.title}</p>
                          <ul className="mt-3 space-y-2">
                            {group.items.map((link) => (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  className="block rounded-lg px-2 py-2 text-sm text-ink-soft transition-colors hover:bg-white hover:text-forest-900"
                                  onClick={() => setOpenMenu(null)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-clay-600 text-paper transition-colors hover:bg-clay-700"
          >
            Donate
          </Link>
          <button
            type="button"
            className="p-2 text-forest-900 lg:hidden"
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
        <nav className="border-t border-line bg-mist-50 px-5 py-6 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              if (item.href) {
                const active = isLinkActive(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`py-3 text-lg font-display transition-colors ${
                      active ? "text-clay-700" : "text-forest-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const active = isMenuActive(item);

              return (
                <div key={item.label} className="rounded-[1.35rem] border border-line/50 bg-paper p-3 shadow-[0_8px_18px_rgba(22,40,31,0.03)]">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between text-left text-lg font-display transition-colors ${
                      active ? "text-clay-700" : "text-forest-900"
                    }`}
                    onClick={() => setOpenMenu((current) => (current === item.label ? null : item.label))}
                    aria-expanded={openMenu === item.label}
                    aria-current={active ? "page" : undefined}
                    aria-controls={`mobile-menu-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                  >
                    {item.label}
                    <span>{openMenu === item.label ? "−" : "+"}</span>
                  </button>

                  {openMenu === item.label && (
                    <ul id={`mobile-menu-${item.label.toLowerCase().replaceAll(" ", "-")}`} className="mt-3 space-y-2 border-t border-line pt-3">
                      {item.groups?.flatMap((group) =>
                        group.items.map((link) => (
                          <li key={link.href + link.label}>
                            <Link
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-2 py-2 text-sm text-ink-soft hover:bg-mist-100 hover:text-forest-900"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex justify-center rounded-full px-5 py-3 text-sm font-medium bg-clay-600 text-paper"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}

