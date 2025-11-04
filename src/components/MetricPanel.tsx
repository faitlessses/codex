import { useId } from "react";
import { useTrainingStore } from "../hooks/useTrainingStore";

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const gradientId = useId();
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1 || 1)) * 100;
      const y = 100 - ((value - min) / (max - min || 1)) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-16 w-full">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill={`url(#${gradientId})`}
        stroke="none"
        points={`${points} 100,100 0,100`}
      />
      <polyline fill="none" stroke={color} strokeWidth="3" points={points} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MetricPanel() {
  const { metrics } = useTrainingStore();

  return (
    <section className="glass-panel relative overflow-hidden rounded-3xl p-6">
      <div className="grid-overlay" />
      <div className="z-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Loss Trajectory</p>
          <p className="mt-2 text-3xl font-semibold text-neon-cyan">{metrics.losses.at(-1)?.toFixed(2)}</p>
          <p className="text-xs text-white/50">Median loss across the last epoch window.</p>
          <Sparkline data={metrics.losses} color="#33f0ff" />
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Caption Velocity</p>
          <p className="mt-2 text-3xl font-semibold text-neon-pink">{metrics.captionsPerMinute.at(-1)} /min</p>
          <p className="text-xs text-white/50">Auto-description throughput after vectorization.</p>
          <Sparkline data={metrics.captionsPerMinute} color="#ff3d81" />
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Dataset Footprint</p>
          <p className="mt-2 text-3xl font-semibold text-neon-lime">{metrics.datasetGrowth.at(-1)} clips</p>
          <p className="text-xs text-white/50">Combined carton stills and Wan motion spans.</p>
          <Sparkline data={metrics.datasetGrowth} color="#c6ff5d" />
        </div>
      </div>
    </section>
  );
}
