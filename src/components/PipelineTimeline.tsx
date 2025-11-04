import { IconCircleCheck, IconTimeline, IconSparkles, IconBrandSpeedtest } from "@tabler/icons-react";

const phases = [
  {
    id: "ingest",
    title: "Ingest",
    description: "Upload carton stills or Wan storyboards. Flux lens analyzer tags stock instantly.",
    status: "complete"
  },
  {
    id: "caption",
    title: "Describe",
    description: "Auto-description lab infuses narrative cues, lighting tags, and gesture anchors.",
    status: "active"
  },
  {
    id: "train",
    title: "Train",
    description: "LoRA fine-tuning kicks with dynamic LR, dataset balancer, and reflex previews.",
    status: "pending"
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Hyperloop mirror pushes the LoRA live with telemetry-synced canary tests.",
    status: "pending"
  }
];

const icons = {
  ingest: IconCircleCheck,
  caption: IconSparkles,
  train: IconBrandSpeedtest,
  deploy: IconTimeline
};

const statusStyles = {
  complete: "bg-gradient-to-r from-neon-cyan to-neon-pink text-slate-950",
  active: "border border-neon-cyan/40 text-neon-cyan",
  pending: "border border-white/10 text-white/50"
};

export function PipelineTimeline() {
  return (
    <section className="glass-panel relative overflow-hidden rounded-3xl p-6">
      <div className="grid-overlay" />
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">Full Cycle Timeline</p>
      <h2 className="mt-2 text-lg font-semibold">Flux ↔ Wan LoRA Journey</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {phases.map((phase) => {
          const Icon = icons[phase.id as keyof typeof icons];
          const style = statusStyles[phase.status as keyof typeof statusStyles];
          return (
            <div key={phase.id} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
              <div className="flex items-center gap-2 text-white">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full ${style}`}>
                  <Icon size={18} />
                </span>
                <span className="text-sm font-semibold text-white">{phase.title}</span>
              </div>
              <p className="mt-3 text-xs text-white/60">{phase.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
