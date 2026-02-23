import TraceList from "@/components/traces/TraceList";
import { mockTraces } from "@/lib/mockData";

export default function TracesPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Traces</h2>
      <TraceList traces={mockTraces} />
    </div>
  );
}