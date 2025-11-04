import { create } from 'zustand';

import { clampProgress } from '../utils/progress';

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
      const progress = clampProgress(value);

      let nextStatus = state.status;
      if (progress === 100) {
        nextStatus = 'complete';
      } else if (progress > 0 && progress < 100) {
        nextStatus = 'training';
      }

      if (progress === state.progress && nextStatus === state.status) {
        return state;
      }

      return {
        progress,
        status: nextStatus,
      };
    });
  },
}));
