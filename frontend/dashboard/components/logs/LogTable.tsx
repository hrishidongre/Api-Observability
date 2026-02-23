"use client";

import Link from "next/link";
import { Log } from "@/types/logs";

type Props = {
  logs: Log[];
};

export default function LogTable({ logs }: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="border-b border-zinc-800 text-zinc-400">
          <tr>
            <th className="p-3 text-left">Timestamp</th>
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-left">Level</th>
            <th className="p-3 text-left">Message</th>
            <th className="p-3 text-left">Trace ID</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr
              key={log.id}
              className="border-b border-zinc-800 hover:bg-zinc-800"
            >
              <td className="p-3">
             {new Date(log.timestamp).toISOString().substring(11, 19)}
              </td>

              <td className="p-3">{log.service}</td>

              <td
                className={`p-3 font-semibold ${
                  log.level === "ERROR"
                    ? "text-red-400"
                    : log.level === "WARN"
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                {log.level}
              </td>

              <td className="p-3">{log.message}</td>

              <td className="p-3">
                <Link
                  href={`/traces/${log.traceId}`}
                  className="text-blue-400"
                >
                  {log.traceId}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
