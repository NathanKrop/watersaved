"use client";

import { useState, type FormEvent } from "react";
import { counties } from "@/lib/data/counties";
import { readFormApiResponse } from "@/lib/form-response";
import { isNewsletterStatus, type NewsletterStatus } from "@/lib/newsletter";

export function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [newsletterStatus, setNewsletterStatus] = useState<NewsletterStatus>("not_requested");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(form.entries()),
          newsletter_opt_in: form.get("newsletter_opt_in") === "true",
        }),
      });
      const result = await readFormApiResponse(response);
      if (result.applicationSaved !== true || !isNewsletterStatus(result.newsletterStatus)) {
        throw new Error("We could not confirm that your application was saved. Please try again.");
      }
      setNewsletterStatus(result.newsletterStatus);
      setStatus("done");
      e.currentTarget.reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="space-y-2 text-forest-700">
        <p>Thank you — we&apos;ve received your application and will be in touch within two weeks.</p>
        {newsletterStatus === "pending" && (
          <p>We&apos;ve also sent you an email to confirm your newsletter subscription.</p>
        )}
        {newsletterStatus === "not_configured" && (
          <p>Your application is saved, but newsletter sign-up is not available yet.</p>
        )}
        {newsletterStatus === "failed" && (
          <p>Your application is saved, but we couldn&apos;t complete the newsletter sign-up. Please subscribe separately.</p>
        )}
      </div>
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
      <label className="flex items-start gap-2 text-sm text-ink-soft">
        <input type="checkbox" name="newsletter_opt_in" value="true" className="mt-1" />
        <span>
          I&apos;d also like to receive occasional Mailchimp newsletters. This is optional; only my name and email will be
          shared with Mailchimp. See the{" "}
          <a href="/legal/privacy-policy" className="underline underline-offset-2">
            privacy policy
          </a>
          .
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="justify-self-start px-5 py-2.5 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit application"}
      </button>
      {status === "error" && <p role="alert" className="text-sm text-clay-700">{errorMessage}</p>}
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
