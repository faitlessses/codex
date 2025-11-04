import { create } from "zustand";
import { mockUploads, mockTrainingRuns, mockMetrics } from "../data/mock";

type UploadStatus = "queued" | "processing" | "captioned" | "error";

type Upload = {
  id: string;
  name: string;
  type: "image" | "video";
  status: UploadStatus;
  variants: number;
  qualityScore: number;
  description?: string;
};

type TrainingRun = {
  id: string;
  title: string;
  progress: number;
  eta: string;
  loss: number;
  lr: number;
  checkpoints: number;
  status: "training" | "scheduling" | "complete";
};

type Metrics = {
  losses: number[];
  captionsPerMinute: number[];
  datasetGrowth: number[];
};

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
