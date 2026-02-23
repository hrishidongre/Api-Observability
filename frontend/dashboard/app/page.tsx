import StatCard from "@/components/charts/StatCard";
import LineChart from "@/components/charts/LineChart";
import {latencySeries} from "@/lib/mockData";


export default function OverviewPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>

      <div className="grid grid-cols-4 gap-6">
        <StatCard label="Requests/sec" value="124" />
        <StatCard label="Error Rate" value="1.2%" highlight="text-red-400" />
        <StatCard label="Avg Latency" value="210ms" />
        <StatCard label="P95 Latency" value="480ms" />
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">
          Latency (Last 20 min)
        </h3>
        <LineChart title="Latency (Last 20 min)" data={latencySeries.data} />

      </div>
    </div>
  );
}
