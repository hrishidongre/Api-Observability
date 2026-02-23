import LineChart from "@/components/charts/LineChart";
import {
  latencySeries,
  requestSeries,
  errorSeries,
} from "@/lib/mockData";

export default function MetricsPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Metrics</h2>

      <LineChart
        title="Latency"
        data={latencySeries.data}
        color="#3b82f6"
      />

      <LineChart
        title="Requests Per Second"
        data={requestSeries.data}
        color="#22c55e"
      />

      <LineChart
        title="Error Rate"
        data={errorSeries.data}
        color="#ef4444"
      />
    </div>
  );
}