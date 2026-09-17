import { CtaLink } from "@/components/cta-link";

export const metadata = { title: "Partner Portal" };

export default function PortalStubPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 pt-16 pb-24 text-center">
      <p className="text-sm text-forest-500">Partner portal</p>
      <h1 className="mt-2 font-display text-3xl text-forest-900 text-balance">
        Sign-in for funders and partner organisations
      </h1>
      <p className="mt-5 text-ink-soft">
        This route is a placeholder for the authenticated partner/funder portal described in the
        backend build spec — Supabase Auth, gated by the <code>partner_users</code> role, showing
        each partner only their own linked projects and letting them submit progress reports.
      </p>
      <div className="mt-8">
        <CtaLink href="/get-involved/partner" variant="secondary">
          Back to Partner With Us
        </CtaLink>
      </div>
    </section>
  );
}
