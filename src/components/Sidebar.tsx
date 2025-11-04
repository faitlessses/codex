import {
  IconHome,
  IconCloudUpload,
  IconDeviceFloppy,
  IconSparkles,
  IconAdjustmentsAlt,
  IconTimeline,
  IconSettings
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import clsx from "clsx";

const navItems = [
  { label: "Overview", icon: IconHome, active: true },
  { label: "Ingest", icon: IconCloudUpload },
  { label: "Datasets", icon: IconDeviceFloppy },
  { label: "Style Genome", icon: IconSparkles },
  { label: "Experiments", icon: IconAdjustmentsAlt },
  { label: "Timeline", icon: IconTimeline },
  { label: "Settings", icon: IconSettings }
];

export function Sidebar() {
  return (
    <aside className="glass-panel relative flex h-full w-64 flex-col overflow-hidden rounded-3xl border border-white/10 p-6">
      <div className="grid-overlay" />
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="z-10">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-pink opacity-30 blur" />
            <span className="relative flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-lg font-semibold text-neon-cyan">
              Λ
            </span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">LoRA Studio</p>
            <p className="text-xl font-semibold">Flux & Wan Forge</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-white/60">
          Full-cycle orchestration for Flux1.dev carton generators and Wan2.2 narrative video diffusion.
        </p>
      </motion.div>

      <nav className="z-10 mt-10 space-y-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <motion.button
            key={label}
            whileHover={{ x: 4 }}
            className={clsx(
              "flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-sm transition",
              active
                ? "bg-white/10 text-white shadow-glow"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            )}
          >
            <Icon size={18} />
            {label}
          </motion.button>
        ))}
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 mt-auto rounded-3xl bg-gradient-to-br from-white/5 to-white/0 p-4"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-neon-lime/80">Hyperloop</p>
        <p className="mt-2 text-sm font-semibold">Realtime Sim-to-Live Sync</p>
        <p className="mt-1 text-xs text-white/60">
          Monitor LoRA merges as they stream into production endpoints with zero downtime switchover.
        </p>
        <button className="mt-4 w-full rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-pink py-2 text-sm font-semibold text-slate-950 shadow-neon">
          Launch Mirror
        </button>
      </motion.div>
    </aside>
  );
}
