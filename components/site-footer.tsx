import Image from "next/image";
import Link from "next/link";
import { counties } from "@/lib/data/counties";
import { primaryLocation } from "@/lib/data/location";
import { NewsletterForm } from "./newsletter-form";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/savewatertowers?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    Icon: LinkedInIcon,
  },
  {
    label: "X",
    href: "https://x.com/savewatertowers?s=11&t=p5G71GPpSaLVeLwVufgKZw",
    Icon: XIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Bwq4XbruR/?mibextid=wwXIfr",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/savewatertowers?stkn=aW8wcXJ0NWw5NTZv&utm_source=qr",
    Icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@savewatertowers?si=TPazHw4nkqYJDq-f",
    Icon: YouTubeIcon,
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3Zm-1.3 1.4h2.6v8.1h-2.6V9.9Zm4.2 0h2.5v1.1h.04c.35-.66 1.2-1.35 2.47-1.35 2.65 0 3.14 1.74 3.14 4v4.3h-2.6v-3.8c0-1.02-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27v3.88h-2.6V9.9Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.9 2h3.4l-7.43 8.49L22.5 22h-6.72l-5.26-7.28L4.42 22H1l7.97-9.09L1.5 2h6.89l4.76 6.75L18.9 2Zm-1.18 18h1.87L7.08 3.9H5.08L17.72 20Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.5 22v-8h2.8l.4-3.2h-3.2V7.4c0-.9.3-1.6 1.7-1.6H17V2.8c-.4-.1-1.9-.3-3.6-.3-3.5 0-5.9 2.1-5.9 6.1v2.2H5V14h2.5v8h6Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M21.6 7.2a3.1 3.1 0 0 0-2.2-2.2C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.4.5A3.1 3.1 0 0 0 2.4 7.2 32.4 32.4 0 0 0 2 12a32.4 32.4 0 0 0 .4 4.8 3.1 3.1 0 0 0 2.2 2.2c1.8.5 7.4.5 7.4.5s5.6 0 7.4-.5a3.1 3.1 0 0 0 2.2-2.2A32.4 32.4 0 0 0 22 12a32.4 32.4 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest-900 text-mist-50">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="relative h-20 w-20 overflow-hidden bg-transparent sm:h-24 sm:w-24 lg:h-28 lg:w-28">
              <Image
                src="/logo/mylogo/logo2.png"
                alt="Save Kenya Water Towers logo"
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-forest-300">
            Restoring the forests, springs and farms of {primaryLocation.name} and the connected water towers of Kenya.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-forest-700 bg-forest-800 text-forest-200 transition-colors hover:border-clay-400 hover:bg-clay-500 hover:text-mist-50"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-mist-50">Counties of operation</p>
          <ul className="mt-3 space-y-1.5 text-sm text-forest-300">
            {counties.map((c) => (
              <li key={c.slug} className="hover:text-mist-50">
                {c.name}
              </li>
            ))}
          </ul>
          <Link href={primaryLocation.projectHref} className="mt-4 inline-block text-sm text-clay-600 hover:text-mist-50">
            Explore the Spencer Line project &rarr;
          </Link>
        </div>

        <div>
          <p className="text-sm font-medium text-mist-50">Organisation</p>
          <ul className="mt-3 space-y-1.5 text-sm text-forest-300">
            <li>
              <Link href="/who-we-are" className="hover:text-mist-50">
                Who we are
              </Link>
            </li>
            <li>
              <Link href="/impact" className="hover:text-mist-50">
                Impact & annual reports
              </Link>
            </li>
            <li>
              <Link href="/legal/safeguarding-policy" className="hover:text-mist-50">
                Safeguarding policy
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy-policy" className="hover:text-mist-50">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className="hover:text-mist-50">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-mist-50">
                Report a concern
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-xs text-forest-300">
            No 5 Doctors Drive, off Lumumba Avenue, Eldoret, Kenya
            <br />
            +254 722 643 606 · info@savekenyawatertowers.org
            <br />
            Member, Kenya Climate Change Working Group (KCCWG)
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-mist-50">Stay in touch</p>
          <div className="mt-3">
            <NewsletterForm dark />
          </div>
        </div>
      </div>

      <div className="border-t border-forest-700/50">
        <div className="mx-auto max-w-6xl px-5 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-forest-300">
          <p>© {new Date().getFullYear()} Save Kenya Water Towers. All rights reserved.</p>
          <p>Registered NGO, Republic of Kenya</p>
        </div>
      </div>
    </footer>
  );
}

