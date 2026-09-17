"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      // Backend: POST /api/contact — inserts into contact_messages,
      // notifies staff internally.
      await fetch("/api/contact", {
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
    return <p className="text-forest-700">Thank you — we typically respond within two business days.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 max-w-xl">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm text-ink-soft mb-1.5">
            Name
          </label>
          <input id="name" name="name" required className="w-full border border-line px-3 py-2 text-sm bg-paper" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-ink-soft mb-1.5">
            Email
          </label>
          <input id="email" name="email" type="email" required className="w-full border border-line px-3 py-2 text-sm bg-paper" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm text-ink-soft mb-1.5">
          Subject
        </label>
        <input id="subject" name="subject" required className="w-full border border-line px-3 py-2 text-sm bg-paper" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-ink-soft mb-1.5">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} className="w-full border border-line px-3 py-2 text-sm bg-paper" />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="justify-self-start px-5 py-2.5 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && <p className="text-sm text-clay-700">Something went wrong — please try again.</p>}
    </form>
  );
}
