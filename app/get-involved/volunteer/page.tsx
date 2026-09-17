import { VolunteerForm } from "@/components/volunteer-form";

export const metadata = { title: "Volunteer" };

export default function VolunteerPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 pt-16 pb-20">
      <p className="text-sm text-forest-500">Get involved / Volunteer</p>
      <h1 className="mt-2 font-display text-4xl text-forest-900 max-w-xl text-balance">
        Bring a spade, or bring a spreadsheet.
      </h1>
      <p className="mt-5 text-ink-soft max-w-xl">
        Most volunteer days are hands-on: planting, fencing, nursery work. We occasionally need
        help off-site too — translation, photography, data entry. Tell us what you&apos;ve got.
      </p>
      <div className="mt-10">
        <VolunteerForm />
      </div>
    </section>
  );
}
