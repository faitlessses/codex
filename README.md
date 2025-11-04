# Flux & Wan LoRA Forge

Ultramodern control center UI for orchestrating full-cycle LoRA training tailored to Flux1.dev carton generators and Wan2.2 cinematic diffusion. Inspired by [ostris/ai-toolkit](https://github.com/ostris/ai-toolkit) but redesigned as a neon cockpit for dataset ingest, auto-captioning, experiment management, and deployment visualization.

## Features

- **Dataset Forge** – upload assets, auto-balance modality ratios, and monitor quality cohesion.
- **Auto Description Lab** – generate narrative captions, prompt genomes, and Lumi Co-Pilot gap analysis.
- **Model Playground** – flip between Flux1.dev and Wan2.2 focus modes with adaptive hyperparameter hints.
- **Training Conductor** – visualize progress, losses, learning rates, and checkpoint cadence in real time.
- **Pipeline Timeline** – follow ingest → describe → train → deploy milestones with status highlights.
- **Innovation Hub** – signature extras like Persona Blend Engine, Audience Pulse, and Metric Hologram overlays.

## Getting Started

```bash
npm install
npm run dev
```

Open the provided local URL to explore the interface.

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for the ultramodern neon aesthetic
- [Framer Motion](https://www.framer.com/motion/) for smooth micro-interactions
- [Zustand](https://github.com/pmndrs/zustand) for lightweight state management

## Project Structure

```
src/
  components/      # UI modules for each training surface
  data/            # Mock data used to simulate runtime telemetry
  hooks/           # Global state store
  styles/          # Tailwind entry point and global theming
```

> This is a conceptual experience layer—hook up your own backend endpoints to connect real Flux & Wan training loops.
