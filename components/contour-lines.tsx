type ContourLinesProps = {
  className?: string;
  animate?: boolean;
};

/**
 * The site's one recurring structural motif: topographic contour lines,
 * standing in for the elevation that defines a "water tower" — a montane
 * catchment. Used as section dividers and, once, as the hero's single
 * orchestrated load-in animation. Never used as pure decoration on cards.
 */
export function ContourLines({ className = "", animate = false }: ContourLinesProps) {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 90 C 150 60, 300 100, 450 70 S 750 40, 900 75 S 1100 95, 1200 60"
        stroke="currentColor"
        strokeWidth="1.5"
        className={animate ? "contour-draw" : undefined}
      />
      <path
        d="M0 105 C 180 80, 320 115, 480 90 S 760 65, 920 92 S 1100 108, 1200 82"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        className={animate ? "contour-draw contour-draw-delay" : undefined}
      />
    </svg>
  );
}

