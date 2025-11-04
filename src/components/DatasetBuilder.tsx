import { useTrainingStore } from "../hooks/useTrainingStore";
import { IconUpload, IconWand, IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function DatasetBuilder() {
  const { uploads, autoCaptioning, toggleAutoCaptioning, datasetCohesion } = useTrainingStore();

  return (
    <section className="glass-panel relative overflow-hidden rounded-3xl p-6">
      <div className="grid-overlay" />
      <div className="z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Dataset Forge</h2>
            <p className="text-sm text-white/60">Upload, auto-caption, and synthesize balanced corpora for LoRA tuning.</p>
          </div>
          <button className="flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white/70 transition hover:border-neon-cyan/60 hover:text-white">
            <IconUpload size={16} />
            Queue Assets
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <motion.div whileHover={{ y: -4 }} className="neon-border relative rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan/80">Auto Captioning</p>
            <p className="mt-3 text-sm text-white/70">
              Generate dense metadata with flux-aligned descriptors and scene-intent tags for Wan2.2 sequences.
            </p>
            <label className="mt-4 inline-flex items-center gap-2 text-xs text-white/60">
              <input
                type="checkbox"
                checked={autoCaptioning}
                onChange={toggleAutoCaptioning}
                className="h-4 w-4 rounded border-white/30 bg-black/40 accent-neon-cyan"
              />
              Auto-run after ingest
            </label>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="relative rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neon-pink/80">Cohesion</p>
            <p className="mt-3 text-4xl font-semibold">{Math.round(datasetCohesion * 100)}%</p>
            <p className="text-xs text-white/50">Style-spectrum alignment score across current dataset</p>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-lime"
                style={{ width: `${datasetCohesion * 100}%` }}
              />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="relative rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neon-lime/80">Smart Balancer</p>
            <ul className="mt-3 space-y-2 text-xs text-white/60">
              <li className="flex items-center gap-2">
                <IconCheck size={14} className="text-neon-cyan" />
                Flux carton frames vs Wan motion clips synced at 60/40
              </li>
              <li className="flex items-center gap-2">
                <IconCheck size={14} className="text-neon-cyan" />
                Diversity budget locked at 0.78 with auto-pruning
              </li>
              <li className="flex items-center gap-2">
                <IconCheck size={14} className="text-neon-cyan" />
                Motion credit predictor pre-labels tricky transitions
              </li>
            </ul>
            <button className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 transition hover:bg-white/20">
              <IconWand size={14} />
              Rebalance Now
            </button>
          </motion.div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/30 p-4 text-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Recent Uploads</p>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {uploads.slice(0, 3).map((upload) => (
              <div key={upload.id} className="rounded-2xl border border-white/5 bg-white/5 p-3">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span className="uppercase tracking-wide text-white/50">{upload.type}</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase text-white/60">{upload.status}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-white">{upload.name}</p>
                <p className="mt-1 text-xs text-white/50">Variants: {upload.variants}</p>
                <p className="text-xs text-white/50">Quality {upload.qualityScore}/100</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
