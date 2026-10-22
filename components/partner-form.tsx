"use client";

import { useState, type FormEvent } from "react";
import { readFormApiResponse } from "@/lib/form-response";
import { isNewsletterStatus, type NewsletterStatus } from "@/lib/newsletter";

const PARTNERSHIP_TYPES = ["Funding partner", "Technical/NGO partner", "Government agency", "Corporate partner", "Other"];

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [newsletterStatus, setNewsletterStatus] = useState<NewsletterStatus>("not_requested");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/partner-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(form.entries()),
          newsletter_opt_in: form.get("newsletter_opt_in") === "true",
        }),
      });
      const result = await readFormApiResponse(response);
      if (result.applicationSaved !== true || !isNewsletterStatus(result.newsletterStatus)) {
        throw new Error("We could not confirm that your inquiry was saved. Please try again.");
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
        <p>Thank you — our partnerships lead will respond within a few business days.</p>
        {newsletterStatus === "pending" && (
          <p>We&apos;ve also sent you an email to confirm your newsletter subscription.</p>
        )}
        {newsletterStatus === "not_configured" && (
          <p>Your inquiry is saved, but newsletter sign-up is not available yet.</p>
        )}
        {newsletterStatus === "failed" && (
          <p>Your inquiry is saved, but we couldn&apos;t complete the newsletter sign-up. Please subscribe separately.</p>
        )}
      </div>
    );
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
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
      {status === "error" && <p role="alert" className="text-sm text-clay-700">{errorMessage}</p>}
    </form>
  );
}
