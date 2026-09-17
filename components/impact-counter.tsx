"use client";

import { useEffect, useRef, useState } from "react";
import { formatNumber } from "@/lib/format";
import type { ImpactGoal } from "@/lib/types";

export function ImpactCounter({ goal }: { goal: ImpactGoal }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? goal.currentValue
      : 0
  );
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1400;
        const start = performance.now();
        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(goal.currentValue * eased));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [goal.currentValue]);

  const percent = Math.min(100, Math.round((goal.currentValue / goal.targetValue) * 100));

  return (
    <div ref={ref} className="border-t border-line pt-5">
      <p className="font-display text-4xl text-forest-900 tabular-nums">
        {formatNumber(display)}
        <span className="text-base font-sans text-ink-soft"> / {formatNumber(goal.targetValue)} {goal.unit}</span>
      </p>
      <p className="mt-1 text-sm text-ink-soft">
        {goal.label} · target {goal.targetYear}
      </p>
      <div className="mt-3 h-1 bg-mist-100">
        <div className="h-1 bg-clay-600" style={{ width: `${percent}%` }} />
      </div>
      <button
        type="button"
        onClick={() => setShowNote((v) => !v)}
        className="mt-2 text-xs text-forest-500 underline underline-offset-2"
        aria-expanded={showNote}
      >
        How we measure this
      </button>
      {showNote && <p className="mt-1 text-xs text-ink-soft">{goal.methodologyNote}</p>}
    </div>
  );
}

