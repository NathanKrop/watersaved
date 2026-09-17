"use client";

import { useState, type FormEvent } from "react";
import { counties } from "@/lib/data/counties";

export function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      // Backend: POST /api/volunteer — inserts into volunteer_applications,
      // notifies staff, sends an auto-acknowledgement to the applicant.
      await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      setStatus("done");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-forest-700">
        Thank you — we&apos;ve received your application and will be in touch within two weeks.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 max-w-xl">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="full_name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="county" className="block text-sm text-ink-soft mb-1.5">
            County
          </label>
          <select id="county" name="county" required className="w-full border border-line px-3 py-2 text-sm bg-paper">
            <option value="">Select a county</option>
            {counties.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <Field label="Availability" name="availability" placeholder="e.g. weekends, one Saturday a month" />
      </div>
      <div>
        <label htmlFor="skills" className="block text-sm text-ink-soft mb-1.5">
          Relevant skills (optional)
        </label>
        <input id="skills" name="skills" className="w-full border border-line px-3 py-2 text-sm bg-paper" placeholder="e.g. nursery management, first aid, driving" />
      </div>
      <div>
        <label htmlFor="motivation" className="block text-sm text-ink-soft mb-1.5">
          Why do you want to volunteer with us?
        </label>
        <textarea id="motivation" name="motivation" required rows={4} className="w-full border border-line px-3 py-2 text-sm bg-paper" />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="justify-self-start px-5 py-2.5 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit application"}
      </button>
      {status === "error" && <p className="text-sm text-clay-700">Something went wrong — please try again.</p>}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-ink-soft mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-line px-3 py-2 text-sm bg-paper"
      />
    </div>
  );
}

