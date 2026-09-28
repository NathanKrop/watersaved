import Image from "next/image";
import Link from "next/link";
import { counties } from "@/lib/data/counties";
import { primaryLocation } from "@/lib/data/location";
import { NewsletterForm } from "./newsletter-form";

export function SiteFooter() {
  return (
    <footer className="bg-forest-900 text-mist-50">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden bg-transparent sm:h-20 sm:w-20">
              <Image
                src="/logo/mylogo/logo2.png"
                alt="Save Kenya Water Towers logo"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-forest-300">
            Restoring the forests, springs and farms of {primaryLocation.name} and the connected water towers of Kenya.
          </p>
          <div className="mt-4 flex gap-4 text-sm text-forest-300">
            <a href="https://x.com/savewatertowers" className="hover:text-mist-50">
              X / Twitter
            </a>
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

