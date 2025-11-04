import { useState } from "react";
import { IconWand, IconNotebook, IconRobot } from "@tabler/icons-react";
import { motion } from "framer-motion";

const demoCaptions = [
  "Flux carton: chrome courier balancing holo-crates in sunrise refraction.",
  "Wan cinematic: drone dive reveals neon atrium while protagonist rotates in slow parallax.",
  "Flux carton: botanical mecha with translucent cartilage petals, volumetric lighting."
];

export function AutoDescribe() {
  const [index, setIndex] = useState(0);

  const cycle = () => setIndex((prev) => (prev + 1) % demoCaptions.length);

  return (
    <section className="glass-panel relative overflow-hidden rounded-3xl p-6">
      <div className="grid-overlay" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Auto Description Lab</h2>
            <p className="text-sm text-white/60">Synthesize narrative captions, motion cues, and prompt blends instantly.</p>
          </div>
          <button onClick={cycle} className="flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white/70 transition hover:border-neon-lime/60 hover:text-white">
            <IconWand size={16} />
            Remix Caption
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div whileHover={{ y: -3 }} className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Narrative Caption</p>
            <p className="mt-3 text-sm text-white/80">{demoCaptions[index]}</p>
            <p className="mt-3 text-xs text-white/50">Auto-inferred from visual tokens, camera embeddings, and storyboard heuristics.</p>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Prompt Genome</p>
            <ul className="mt-3 space-y-2 text-xs text-white/60">
              <li className="flex items-center gap-2">
                <IconNotebook size={14} className="text-neon-cyan" />
                Motion DNA: {index === 1 ? "Skydrift spiral" : "Glide-pan equilibrium"}
              </li>
              <li className="flex items-center gap-2">
                <IconNotebook size={14} className="text-neon-cyan" />
                Lighting Capsule: {index === 0 ? "Prismatic dawn" : "Holographic dusk"}
              </li>
              <li className="flex items-center gap-2">
                <IconNotebook size={14} className="text-neon-cyan" />
                Emotion Thread: {index === 2 ? "Organic reverence" : "Velocity resolve"}
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ y: -3 }}
          className="rounded-3xl border border-neon-cyan/30 bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10 p-4"
        >
          <div className="flex items-center gap-3 text-sm text-white/70">
            <IconRobot size={16} className="text-neon-cyan" />
            <span>
              Lumi Co-Pilot predicts shot continuity gaps and suggests bridging prompts before training loops commit.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
