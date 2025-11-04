import { create } from 'zustand';

export type TrainingStatus = 'idle' | 'training' | 'complete';

export interface TrainingState {
  progress: number;
  status: TrainingStatus;
  updateTrainingProgress: (progress: number) => void;
}

export const useTrainingStore = create<TrainingState>((set) => ({
  progress: 0,
  status: 'idle',
  updateTrainingProgress: (value) => {
    set((state) => {
      const progress = Math.max(0, Math.min(100, value));

      let nextStatus = state.status;
      if (progress === 100) {
        nextStatus = 'complete';
      } else if (progress > 0 && progress < 100) {
        nextStatus = 'training';
      }

      return {
        progress,
        status: nextStatus,
      };
    });
  },
}));
