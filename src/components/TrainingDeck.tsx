import React from 'react';

export interface TrainingRun {
  id: string;
  name: string;
  progress: number;
}

export interface TrainingDeckProps {
  runs: TrainingRun[];
}

export const TrainingDeck: React.FC<TrainingDeckProps> = ({ runs }) => {
  return (
    <div className="training-deck">
      {runs.map((run) => {
        const progress = Math.min(Math.max(run.progress ?? 0, 0), 100);
        return (
          <div key={run.id} className="training-deck__item">
            <div className="training-deck__item-header">
              <span className="training-deck__item-name">{run.name}</span>
              <span className="training-deck__item-progress">{progress.toFixed(0)}%</span>
            </div>
            <div className="training-deck__progress-bar">
              <div
                className="training-deck__progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrainingDeck;
