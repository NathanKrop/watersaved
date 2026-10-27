import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { sitePhotos } from "@/lib/data/site-photos";
import { primaryLocation } from "@/lib/data/location";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src={sitePhotos.contactHero}
          alt="Field team at work"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-forest-900/65" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-12">
          <p className="text-sm text-forest-300">Contact</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-md text-balance">Talk to us.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-16 grid gap-8 lg:grid-cols-2">
        <div>
          <div className="space-y-4 text-ink-soft">
            <p>{primaryLocation.officeAddress}</p>
            <p>+254 722 643 606</p>
            <p>
              <a href={`mailto:${primaryLocation.contactEmail}`} className="underline underline-offset-2">
                {primaryLocation.contactEmail}
              </a>
            </p>
          </div>
          <p className="mt-8 text-sm text-ink-soft max-w-md">
            To report a safeguarding concern, please say so in your message — these are routed
            directly to our safeguarding lead. See our{" "}
            <a href="/legal/safeguarding-policy" className="underline underline-offset-2">
              safeguarding policy
            </a>
            .
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
