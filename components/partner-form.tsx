"use client";

import { useState, type FormEvent } from "react";

const PARTNERSHIP_TYPES = ["Funding partner", "Technical/NGO partner", "Government agency", "Corporate partner", "Other"];

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      // Backend: POST /api/partner-inquiry — inserts into partner_applications.
      await fetch("/api/partner-inquiry", {
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
    return <p className="text-forest-700">Thank you — our partnerships lead will respond within a few business days.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 max-w-xl">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="org_name" className="block text-sm text-ink-soft mb-1.5">
            Organisation name
          </label>
          <input id="org_name" name="org_name" required className="w-full border border-line px-3 py-2 text-sm bg-paper" />
        </div>
        <div>
          <label htmlFor="contact_name" className="block text-sm text-ink-soft mb-1.5">
            Contact name
          </label>
          <input id="contact_name" name="contact_name" required className="w-full border border-line px-3 py-2 text-sm bg-paper" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm text-ink-soft mb-1.5">
            Email
          </label>
          <input id="email" name="email" type="email" required className="w-full border border-line px-3 py-2 text-sm bg-paper" />
        </div>
        <div>
          <label htmlFor="partnership_type" className="block text-sm text-ink-soft mb-1.5">
            Partnership type
          </label>
          <select id="partnership_type" name="partnership_type" required className="w-full border border-line px-3 py-2 text-sm bg-paper">
            <option value="">Select one</option>
            {PARTNERSHIP_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-ink-soft mb-1.5">
          Tell us about the partnership you have in mind
        </label>
        <textarea id="message" name="message" required rows={5} className="w-full border border-line px-3 py-2 text-sm bg-paper" />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="justify-self-start px-5 py-2.5 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
      {status === "error" && <p className="text-sm text-clay-700">Something went wrong — please try again.</p>}
    </form>
  );
}
