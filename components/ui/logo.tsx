import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement> & { size?: number };

/**
 * Auren mark — a circle, half solid and half outline: a whole made of
 * what is built and what is left open. Stroke weight (1.5) is shared with
 * the Zent mark so the two read as one family.
 */
export function AurenMark({ size = 24, ...props }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2a10 10 0 0 0 0 20Z" fill="currentColor" />
    </svg>
  );
}

/**
 * Zent mark — a square (the monitored surface) holding a "Z" drawn as a
 * single continuous stroke: a signal that crosses and returns.
 */
export function ZentMark({ size = 24, ...props }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="2.75"
        y="2.75"
        width="18.5"
        height="18.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7.5 8h9l-9 8h9"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

type LogoProps = { className?: string; size?: number };

export function AurenLogo({ className = "", size = 22 }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <AurenMark size={size} />
      <span className="text-[1.0625rem] font-semibold leading-none tracking-[-0.03em]">
        Auren
      </span>
    </span>
  );
}

export function ZentLogo({ className = "", size = 22 }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <ZentMark size={size} />
      <span className="text-[1.0625rem] font-semibold leading-none tracking-[-0.03em]">
        Zent
      </span>
    </span>
  );
}
