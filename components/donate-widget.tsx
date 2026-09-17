"use client";

import { useState } from "react";
import { formatKes } from "@/lib/format";

const AMOUNTS_KES = [500, 1500, 5000, 15000];
type Method = "mpesa" | "card" | "bank" | "in-kind";

export function DonateWidget({
  projectSlug,
  projectName,
}: {
  projectSlug?: string;
  projectName?: string;
}) {
  const [amount, setAmount] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one_off" | "monthly">("one_off");
  const [method, setMethod] = useState<Method>("mpesa");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "pending" | "error">("idle");

  const finalAmount = customAmount ? Number(customAmount) : amount;

  async function handleSubmit() {
    setStatus("submitting");
    try {
      // Backend: POST /api/donations/initiate — see build spec §4.
      // For M-Pesa this should trigger a Daraja STK push and return a
      // pending state; for card it should return a checkout redirect URL.
      await fetch("/api/donations/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          frequency,
          method,
          phone: method === "mpesa" ? phone : undefined,
          projectSlug,
        }),
      });
      setStatus(method === "mpesa" ? "pending" : "idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="border border-line bg-paper p-6">
      <p className="text-xs uppercase tracking-wide text-forest-500">
        {projectName ? `Supporting: ${projectName}` : "General fund"}
      </p>
      <p className="mt-1 font-display text-2xl text-forest-900">Give to protect a water tower</p>

      <div className="mt-5 flex border border-line w-fit text-sm">
        {(["one_off", "monthly"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={`px-4 py-2 ${frequency === f ? "bg-forest-900 text-mist-50" : "text-ink-soft"}`}
          >
            {f === "one_off" ? "One-off" : "Monthly"}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {AMOUNTS_KES.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => {
              setAmount(a);
              setCustomAmount("");
            }}
            className={`py-2 text-sm border ${
              amount === a && !customAmount
                ? "border-clay-600 bg-clay-100 text-clay-700"
                : "border-line text-ink-soft"
            }`}
          >
            {formatKes(a).replace(".00", "")}
          </button>
        ))}
      </div>
      <input
        type="number"
        min={100}
        placeholder="Custom amount (KES)"
        value={customAmount}
        onChange={(e) => setCustomAmount(e.target.value)}
        className="mt-2 w-full border border-line px-3 py-2 text-sm"
      />

      <fieldset className="mt-5">
        <legend className="text-sm text-ink-soft mb-2">Payment method</legend>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {(
            [
              ["mpesa", "M-Pesa"],
              ["card", "Card"],
              ["bank", "Bank transfer"],
              ["in-kind", "In-kind (seedlings, tools)"],
            ] as [Method, string][]
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setMethod(value)}
              className={`py-2 border ${
                method === value ? "border-forest-700 bg-forest-900 text-mist-50" : "border-line text-ink-soft"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      {method === "mpesa" && (
        <input
          type="tel"
          placeholder="M-Pesa phone number, e.g. 07XX XXX XXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-3 w-full border border-line px-3 py-2 text-sm"
        />
      )}
      {method === "bank" && (
        <p className="mt-3 text-xs text-ink-soft">
          Bank details are shown at checkout and emailed on request via the contact page.
        </p>
      )}
      {method === "in-kind" && (
        <p className="mt-3 text-xs text-ink-soft">
          In-kind gifts (seedlings, fencing wire, field equipment) are coordinated directly —
          this will route you to the contact form.
        </p>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === "submitting" || !finalAmount}
        className="mt-5 w-full py-3 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 disabled:opacity-60"
      >
        {status === "submitting"
          ? "Processing…"
          : method === "mpesa"
            ? `Send M-Pesa prompt for ${formatKes(finalAmount || 0)}`
            : `Continue with ${formatKes(finalAmount || 0)}`}
      </button>

      {status === "pending" && (
        <p className="mt-3 text-sm text-forest-700">
          Check your phone and enter your M-Pesa PIN to complete the donation.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-clay-700">Something went wrong. Please try again.</p>
      )}

      <p className="mt-4 text-xs text-ink-soft">
        {projectSlug
          ? "100% of this gift is tracked against this project's donation goal."
          : "Unrestricted gifts go where the need is greatest across all six counties."}
      </p>
    </div>
  );
}
