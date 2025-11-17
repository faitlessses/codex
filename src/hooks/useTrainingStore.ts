import { create } from "zustand";
import { mockUploads, mockTrainingRuns, mockMetrics } from "../data/mock";
codex/debug-grok_app_full_project.ts-hpr0zk
import { Metrics, TrainingRun, Upload } from "../types/training";

interface TrainingState {
  uploads: Upload[];
  trainingRuns: TrainingRun[];
  metrics: Metrics;
  selectedModel: "flux1.dev" | "wan2.2";
  autoCaptioning: boolean;
  datasetCohesion: number;
  addUpload: (upload: Upload) => void;
  toggleAutoCaptioning: () => void;
  updateTrainingProgress: (runId: string, progress: number) => void;
  updateMetrics: (metrics: Partial<Metrics>) => void;
  setSelectedModel: (model: "flux1.dev" | "wan2.2") => void;
}

import {
  Metrics,
  TrainingRun,
  TrainingState,
  Upload
} from "../types/training";
main

export const useTrainingStore = create<TrainingState>()((set) => ({
  uploads: mockUploads,
  trainingRuns: mockTrainingRuns,
  metrics: mockMetrics,
  selectedModel: "flux1.dev",
  autoCaptioning: true,
  datasetCohesion: 0.86,
  addUpload: (upload) =>
    set((state) => ({
      uploads: [upload, ...state.uploads]
    })),
  toggleAutoCaptioning: () =>
    set((state) => ({
      autoCaptioning: !state.autoCaptioning
    })),
  updateTrainingProgress: (runId, progress) =>
    set((state) => ({
      trainingRuns: state.trainingRuns.map((run) =>
        run.id === runId
          ? {
              ...run,
              progress,
              status: progress >= 100 ? "complete" : run.status
            }
          : run
      )
    })),
  updateMetrics: (metrics) =>
    set((state) => ({
      metrics: {
        ...state.metrics,
        ...metrics
      }
    })),
  setSelectedModel: (model) => set(() => ({ selectedModel: model }))
}));
