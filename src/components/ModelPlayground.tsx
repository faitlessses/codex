import { useTrainingStore } from "../hooks/useTrainingStore";
import { IconBulb, IconAdjustments, IconAnalyze } from "@tabler/icons-react";
import { motion } from "framer-motion";

const modelHighlights = {
  "flux1.dev": {
    title: "Flux1.dev Carton Hyperrealism",
    description:
      "Optimized for crisp packaging renders, reflective inks, and tactile substrate simulation across carton families.",
    recommendations: [
      "Use dual-phase LoRA warmup for foil materials",
      "Enable spectral specular sweep for emboss layers",
      "Blend with 0.2 weight blueprint base for line clarity"
    ]
  },
  "wan2.2": {
    title: "Wan2.2 Story Motion",
    description:
      "Diffusion-native video generator tuned for cinematic transitions, volumetric lighting, and expressive choreography.",
    recommendations: [
      "Set timeline anchors at 24fps for narrative beats",
      "Pair LoRA with tempo-hinted text prompts",
      "Activates gesture-preserving denoiser variant"
    ]
  }
};

export function ModelPlayground() {
  const { selectedModel, setSelectedModel } = useTrainingStore();
  const details = modelHighlights[selectedModel];

  return (
    <section className="glass-panel relative overflow-hidden rounded-3xl p-6">
      <div className="grid-overlay" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Model Playground</h2>
            <p className="text-sm text-white/60">Compare LoRA behaviours between Flux carton renders and Wan cinematic flows.</p>
          </div>
          <div className="flex gap-2 rounded-2xl border border-white/10 bg-black/40 p-1 text-xs">
            <button
              className={`rounded-2xl px-4 py-2 transition ${selectedModel === "flux1.dev" ? "bg-gradient-to-r from-neon-cyan to-neon-pink text-slate-950" : "text-white/60 hover:text-white"}`}
              onClick={() => setSelectedModel("flux1.dev")}
            >
              Flux1.dev
            </button>
            <button
              className={`rounded-2xl px-4 py-2 transition ${selectedModel === "wan2.2" ? "bg-gradient-to-r from-neon-cyan to-neon-pink text-slate-950" : "text-white/60 hover:text-white"}`}
              onClick={() => setSelectedModel("wan2.2")}
            >
              Wan2.2
            </button>
          </div>
        </div>

        <motion.div
          key={selectedModel}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Focus</p>
          <h3 className="mt-2 text-xl font-semibold">{details.title}</h3>
          <p className="mt-2 text-sm text-white/70">{details.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {details.recommendations.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <IconBulb size={16} className="text-neon-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div whileHover={{ y: -3 }} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
            <div className="flex items-center gap-2 text-white">
              <IconAdjustments size={16} className="text-neon-pink" />
              Adaptive Hyperparams
            </div>
            <p className="mt-2 text-xs text-white/50">
              Auto-curates learning rate schedules based on dataset entropy and recent checkpoint variance.
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
            <div className="flex items-center gap-2 text-white">
              <IconAnalyze size={16} className="text-neon-lime" />
              Reflex Preview Grid
            </div>
            <p className="mt-2 text-xs text-white/50">
              Generates tri-view inference snapshots every 500 steps to validate lighting, motion, and brand tone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
