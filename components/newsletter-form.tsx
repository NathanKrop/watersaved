"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setStatus("submitting");
    try {
      // Backend: POST /api/newsletter/subscribe — see build spec.
      await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className={`text-sm ${dark ? "text-forest-300" : "text-forest-700"}`}>
        Check your inbox to confirm your subscription.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm">
      <label htmlFor="newsletter-email" className={`block text-sm mb-2 ${dark ? "text-forest-300" : "text-ink-soft"}`}>
        Field notes from the forest, roughly once a month.
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={`flex-1 min-w-0 px-3 py-2 text-sm border ${
            dark ? "bg-forest-900 border-forest-500 text-paper placeholder:text-forest-300" : "border-line bg-paper"
          }`}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-4 py-2 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      <label className={`mt-3 flex items-start gap-2 text-xs ${dark ? "text-forest-300" : "text-ink-soft"}`}>
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>
          I agree to receive emails and to the{" "}
          <a href="/legal/privacy-policy" className="underline underline-offset-2">
            privacy policy
          </a>
          .
        </span>
      </label>
      {status === "error" && (
        <p className="mt-2 text-xs text-clay-700">Something went wrong — please try again.</p>
      )}
    </form>
  );
}

