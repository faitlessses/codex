export type UploadStatus = "queued" | "processing" | "captioned" | "error";

export type Upload = {
  id: string;
  name: string;
  type: "image" | "video";
  status: UploadStatus;
  variants: number;
  qualityScore: number;
  description?: string;
};

export type TrainingStatus = "training" | "scheduling" | "complete";

export type TrainingRun = {
  id: string;
  title: string;
  progress: number;
  eta: string;
  loss: number;
  lr: number;
  checkpoints: number;
  status: TrainingStatus;
};

export type Metrics = {
  losses: number[];
  captionsPerMinute: number[];
  datasetGrowth: number[];
};
