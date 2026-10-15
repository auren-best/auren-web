import { cx } from "./primitives";

/**
 * Monochrome, dependency-free SVG charts. All draw in `currentColor`, so they
 * inherit light/inverted tone from their container. Server-rendered, no JS.
 */

const W = 600;
const H = 100;

function scale(values: number[], min?: number, max?: number) {
  const lo = min ?? Math.min(...values);
  const hi = max ?? Math.max(...values);
  const span = hi - lo || 1;
  return (v: number) => H - ((v - lo) / span) * (H * 0.88) - H * 0.06;
}

function linePath(values: number[], y: (v: number) => number) {
  const step = W / (values.length - 1);
  return values
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)} ${y(v).toFixed(1)}`)
    .join(" ");
}

export function AreaChart({
  data,
  secondary,
  min,
  max,
  grid = 4,
  area = true,
  label,
  className,
}: {
  data: number[];
  /** Optional second series, drawn dashed (e.g. p50 vs p95). */
  secondary?: number[];
  min?: number;
  max?: number;
  grid?: number;
  area?: boolean;
  label: string;
  className?: string;
}) {
  const all = secondary ? [...data, ...secondary] : data;
  const lo = min ?? Math.min(...all);
  const hi = max ?? Math.max(...all);
  const y = scale(all, lo, hi);
  const main = linePath(data, y);
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      role="img"
      aria-label={label}
      className={cx("h-full w-full overflow-visible", className)}
    >
      {Array.from({ length: grid + 1 }, (_, i) => (
        <line
          key={i}
          x1="0"
          x2={W}
          y1={(i * H) / grid}
          y2={(i * H) / grid}
          stroke="currentColor"
          strokeOpacity="0.14"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {area && (
        <path d={`${main} L${W} ${H} L0 ${H} Z`} fill="currentColor" fillOpacity="0.07" />
      )}
      {secondary && (
        <path
          d={linePath(secondary, y)}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.25"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
        />
      )}
      <path
        d={main}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function Sparkline({
  data,
  label,
  className,
}: {
  data: number[];
  label: string;
  className?: string;
}) {
  return (
    <AreaChart data={data} grid={0} area={false} label={label} className={className} />
  );
}

export function BarChart({
  data,
  max,
  label,
  className,
}: {
  data: number[];
  max?: number;
  label: string;
  className?: string;
}) {
  const hi = max ?? Math.max(...data);
  const bw = W / data.length;
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      role="img"
      aria-label={label}
      className={cx("h-full w-full", className)}
    >
      {data.map((v, i) => {
        const h = Math.max(2, (v / hi) * H);
        return (
          <rect
            key={i}
            x={i * bw + bw * 0.18}
            y={H - h}
            width={bw * 0.64}
            height={h}
            fill="currentColor"
            fillOpacity={0.25 + 0.75 * (v / hi)}
          />
        );
      })}
    </svg>
  );
}

export type DayStatus = "up" | "degraded" | "down";

/** Daily availability strip. Solid = operational, faded = degraded, outlined = outage. */
export function UptimeStrip({
  days,
  label,
  className,
}: {
  days: DayStatus[];
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cx("flex h-7 items-stretch gap-[2px]", className)}
    >
      {days.map((d, i) => (
        <span
          key={i}
          className={cx(
            "flex-1",
            d === "up" && "bg-current",
            d === "degraded" && "bg-current opacity-40",
            d === "down" && "border border-current",
          )}
        />
      ))}
    </div>
  );
}

/** Horizontal utilisation meter, 0-100. */
export function Meter({
  value,
  label,
  className,
}: {
  value: number;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      className={cx("h-1 w-full bg-gray-200 inverted:bg-gray-800", className)}
    >
      <div
        className="h-full bg-black inverted:bg-white"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
