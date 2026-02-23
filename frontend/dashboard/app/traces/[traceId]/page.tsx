import { mockTraces } from "@/lib/mockData";

export default async function TraceDetailPage({params}: {params: Promise<{ traceId: string }>;}) {
    const { traceId } = await params;
  const trace = mockTraces.find(
    (t) => t.traceId === traceId
  );

  if (!trace) {
    return <div>Trace not found</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Trace: {trace.traceId}
      </h2>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <p className="text-zinc-400 mb-2">
          Total Duration:{" "}
          <span className="text-white">
            {trace.duration} ms
          </span>
        </p>

        <div className="space-y-4 mt-6">
          {trace.spans.map((span) => {
            const leftPercent =
              (span.startTime / trace.duration) * 100;
            const widthPercent =
              (span.duration / trace.duration) * 100;

            return (
              <div key={span.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{span.name}</span>
                  <span className="text-zinc-400">
                    {span.duration} ms
                  </span>
                </div>

                <div className="relative w-full bg-zinc-800 h-4 rounded">
                    <div
                    className={`absolute h-4 rounded ${
                        span.service === "database"
                            ? "bg-green-500"
                            : span.service === "auth-service"
                            ? "bg-blue-500"
                            : "bg-purple-500"
                        }`}
                    style={{
                        left: `${leftPercent}%`,
                        width: `${widthPercent}%`,
                    }}
                    />
                    </div>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}