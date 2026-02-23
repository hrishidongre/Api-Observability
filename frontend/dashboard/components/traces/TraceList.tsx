"use client";

import Link from "next/link";
import { Trace } from "@/types/trace";

type Props = {
  traces: Trace[];
};

export default function TraceList({ traces }: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg">
      <table className="w-full text-sm">
        <thead className="border-b border-zinc-800 text-zinc-400">
          <tr>
            <th className="p-3 text-left">Trace ID</th>
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-left">Duration (ms)</th>
          </tr>
        </thead>
        <tbody>
          {traces.map((trace) => (
            <tr
              key={trace.traceId}
              className="border-b border-zinc-800 hover:bg-zinc-800"
            >
              <td className="p-3">
                <Link href={`/traces/${trace.traceId}`} className="text-blue-400">
                  {trace.traceId}
                </Link>
              </td>
              <td className="p-3">{trace.service}</td>
              <td className="p-3">{trace.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}