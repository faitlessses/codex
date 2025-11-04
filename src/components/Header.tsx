import { IconBell, IconSearch, IconSparkles } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl font-semibold"
          >
            Control Cortex
          </motion.h1>
          <p className="mt-2 max-w-2xl text-sm text-white/60">
            Launch, monitor, and refine LoRA pipelines for Flux1.dev carton synthesis and Wan2.2 video storytelling in one ultralight cockpit.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
            <input
              className="w-64 rounded-2xl border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-neon-cyan/60 focus:outline-none"
              placeholder="Search runs, datasets, or prompts"
            />
          </div>
          <button className="relative rounded-2xl border border-white/10 p-2 text-white/70 transition hover:border-neon-pink/60 hover:text-white">
            <IconBell size={18} />
            <span className="absolute right-1 top-1 block h-2 w-2 rounded-full bg-neon-pink" />
          </button>
          <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-neon-cyan/80 to-neon-pink/80 px-4 py-2 text-sm font-semibold text-slate-950 shadow-neon">
            <IconSparkles size={16} />
            Auto-orchestrate
          </button>
        </div>
      </div>
    </header>
  );
}
