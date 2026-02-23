"use client";

import { useState } from "react";
import LogTable from "@/components/logs/LogTable";
import { mockLogs } from "@/lib/mockData";

export default function LogsPage() {
  const [levelFilter, setLevelFilter] = useState("ALL");

  const filteredLogs =
    levelFilter === "ALL"
      ? mockLogs
      : mockLogs.filter((log) => log.level === levelFilter);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Logs</h2>

      <div>
        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 p-2 rounded text-sm"
        >
          <option value="ALL">All</option>
          <option value="INFO">INFO</option>
          <option value="WARN">WARN</option>
          <option value="ERROR">ERROR</option>
        </select>
      </div>

      <LogTable logs={filteredLogs} />
    </div>
  );
}