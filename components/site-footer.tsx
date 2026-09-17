import Link from "next/link";
import Image from "next/image";
import { counties } from "@/lib/data/counties";
import { NewsletterForm } from "./newsletter-form";

const PARTNER_LOGOS = [
  { file: "CAOK.jpeg", label: "CAOK" },
  { file: "CGA.jpeg", label: "CGA" },
  { file: "FAO.jpeg", label: "FAO" },
  { file: "Image (3).jpeg", label: "Partner logo" },
  { file: "Image (4).jpeg", label: "Partner logo" },
  { file: "Image (5).jpeg", label: "Partner logo" },
  { file: "Image 1 (1).jpeg", label: "Partner logo" },
  { file: "Image 1 (2).jpeg", label: "Partner logo" },
  { file: "Image 1.jpeg", label: "Partner logo" },
  { file: "Image 11.jpeg", label: "Partner logo" },
  { file: "Image 14.jpeg", label: "Partner logo" },
  { file: "Image 15.jpeg", label: "Partner logo" },
  { file: "Image 18.jpeg", label: "Partner logo" },
  { file: "Image 19.jpeg", label: "Partner logo" },
  { file: "Image 2.jpeg", label: "Partner logo" },
  { file: "Image 20.jpeg", label: "Partner logo" },
  { file: "Image 4.jpeg", label: "Partner logo" },
  { file: "Image 5.jpeg", label: "Partner logo" },
  { file: "Image.jpeg", label: "Partner logo" },
  { file: "images.jpeg", label: "Partner logo" },
  { file: "SKWT.png", label: "Save Kenya Water Towers" },
];

export function SiteFooter() {
  return (
    <footer className="bg-forest-900 text-mist-50">
      <div className="border-b border-forest-700">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <h2 className="text-sm font-medium text-mist-50">Our partners</h2>
          <p className="mt-2 max-w-xl text-sm text-forest-300">
            Working alongside government, communities, and partners to protect Kenya&apos;s water towers.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {PARTNER_LOGOS.map((logo) => (
              <div
                key={logo.file}
                className="relative flex h-20 items-center justify-center bg-mist-50 px-3 py-2"
              >
                <Image
                  src={`/logo/partners%20logo/${encodeURIComponent(logo.file)}`}
                  alt={logo.label === "Partner logo" ? "" : logo.label}
                  fill
                  sizes="(min-width: 1024px) 14vw, (min-width: 640px) 25vw, 50vw"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-lg">Save Kenya Water Towers</p>
          <p className="mt-3 text-sm text-forest-300">
            Restoring the montane forests that feed the rivers most of Kenya depends on.
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
              <li key={c.slug}>
                <Link href={`/where-we-work#${c.slug}`} className="hover:text-mist-50">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
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

      <div className="border-t border-forest-700">
        <div className="mx-auto max-w-6xl px-5 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-forest-300">
          <p>© {new Date().getFullYear()} Save Kenya Water Towers. All rights reserved.</p>
          <p>Registered NGO, Republic of Kenya</p>
        </div>
      </div>
    </footer>
  );
}
