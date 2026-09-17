import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2";

const variants: Record<NonNullable<CtaLinkProps["variant"]>, string> = {
  primary: "bg-clay-600 text-paper hover:bg-clay-700",
  secondary: "border border-forest-700 text-forest-900 hover:bg-forest-700 hover:text-paper",
  ghost: "text-forest-900 hover:text-clay-600 underline underline-offset-4 decoration-line px-0 py-0",
};

export function CtaLink({ href, children, variant = "primary", className = "" }: CtaLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

