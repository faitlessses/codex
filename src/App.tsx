import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { DatasetBuilder } from "./components/DatasetBuilder";
import { TrainingDeck } from "./components/TrainingDeck";
import { MetricPanel } from "./components/MetricPanel";
import { AutoDescribe } from "./components/AutoDescribe";
import { ModelPlayground } from "./components/ModelPlayground";
import { PipelineTimeline } from "./components/PipelineTimeline";
import { InnovationHub } from "./components/InnovationHub";

export default function App() {
  return (
    <div className="flex min-h-screen gap-6 bg-transparent p-6 text-white">
      <Sidebar />
      <main className="flex flex-1 flex-col gap-6">
        <Header />
        <div className="grid gap-6 xl:grid-cols-2">
          <DatasetBuilder />
          <ModelPlayground />
        </div>
        <MetricPanel />
        <div className="grid gap-6 xl:grid-cols-2">
          <AutoDescribe />
          <TrainingDeck />
        </div>
        <PipelineTimeline />
        <InnovationHub />
      </main>
    </div>
  );
}
