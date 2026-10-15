import {
  AreaChart,
  Tag,
  UptimeStrip,
  demoDays,
  demoSeries,
  type DayStatus,
} from "@/components/ui";

const response = demoSeries(11, 48, 138, 26, { 31: 90, 32: 60 });
const p95 = response.map((v) => Math.round((v * 1.9 + 12) * 10) / 10);
const days = demoDays(60, { 21: "degraded", 44: "down" } as Record<number, DayStatus>);

const stats = [
  { k: "Uptime · 30d", v: "99.97%" },
  { k: "Avg response", v: "142 ms" },
  { k: "Open incidents", v: "0" },
];

/** Compact illustration of the Zent dashboard for the Auren products section. */
export function MiniDashboard() {
  return (
    <figure
      data-tone="inverted"
      className="border border-gray-800 bg-black text-white"
      aria-label="Illustrative preview of the Zent dashboard, using demo data"
    >
      <div className="flex items-center justify-between border-b border-gray-800 px-5 py-3">
        <div className="flex items-center gap-3 font-mono text-[0.6875rem] text-gray-500">
          <span className="inline-block size-2 rounded-full bg-white" />
          <span>production / overview</span>
        </div>
        <Tag className="text-gray-500">Demo data</Tag>
      </div>

      <div className="grid grid-cols-3 border-b border-gray-800">
        {stats.map((s, i) => (
          <div
            key={s.k}
            className={`px-5 py-5 ${i > 0 ? "border-l border-gray-800" : ""}`}
          >
            <div className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-gray-500">
              {s.k}
            </div>
            <div className="mt-2 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
              {s.v}
            </div>
          </div>
        ))}
      </div>

      <div className="border-b border-gray-800 px-5 py-5">
        <div className="mb-3 flex items-center justify-between font-mono text-[0.6875rem] text-gray-500">
          <span>Response time</span>
          <span>last 24h · ms</span>
        </div>
        <div className="h-36">
          <AreaChart
            data={response}
            secondary={p95}
            label="Demo response-time chart, median and 95th percentile"
          />
        </div>
      </div>

      <div className="px-5 py-5">
        <div className="mb-3 flex items-center justify-between font-mono text-[0.6875rem] text-gray-500">
          <span>api.example.com</span>
          <span>60 days</span>
        </div>
        <UptimeStrip days={days} label="Demo 60-day availability history" />
      </div>
    </figure>
  );
}
