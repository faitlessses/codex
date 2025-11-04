import { useTrainingStore } from "../hooks/useTrainingStore";
import { IconPlayerPlay, IconPlayerPause, IconCloudDownload } from "@tabler/icons-react";
import { motion } from "framer-motion";

const statusColor: Record<string, string> = {
  training: "text-neon-cyan",
  scheduling: "text-neon-pink",
  complete: "text-neon-lime"
};

export function TrainingDeck() {
  const { trainingRuns } = useTrainingStore();

  return (
    <section className="glass-panel relative overflow-hidden rounded-3xl p-6">
      <div className="grid-overlay" />
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold">Training Conductor</h2>
          <p className="text-sm text-white/60">Track LoRA fine-tunes, checkpoint merges, and variant sweeps in realtime.</p>
        </div>
        <button className="flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white/70 transition hover:border-neon-pink/60 hover:text-white">
          <IconCloudDownload size={16} />
          Export Logs
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {trainingRuns.map((run, index) => (
          <motion.div
            key={run.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{run.id}</p>
                <h3 className="mt-1 text-base font-semibold">{run.title}</h3>
              </div>
              <span className={`text-xs font-semibold uppercase ${statusColor[run.status]}`}>{run.status}</span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="w-full rounded-full bg-white/10">
                <div
                  className="flex h-2 items-center justify-end rounded-full bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-lime"
                  style={{ width: `${run.progress}%` }}
                >
                  <span className="mr-1 h-2 w-2 rounded-full bg-white shadow-neon" />
                </div>
              </div>
              <span className="text-xs text-white/60">{run.progress}%</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/60">
              <div>
                <p className="text-white/50">ETA</p>
                <p className="text-white">{run.eta}</p>
              </div>
              <div>
                <p className="text-white/50">Loss</p>
                <p className="text-white">{run.loss.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-white/50">LR</p>
                <p className="text-white">{run.lr}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-white/60">
              <p>Checkpoints: {run.checkpoints}</p>
              <div className="flex items-center gap-2">
                <button className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/40 hover:text-white">
                  <IconPlayerPause size={16} />
                </button>
                <button className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/40 hover:text-white">
                  <IconPlayerPlay size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
