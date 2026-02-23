"use client";

import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { MetricPoint } from "@/types/metrics";

type Props = {
  data: MetricPoint[];
  title?: string;
  color?: string;
};

export default function LineChart({
  data,
  title,
  color = "#3b82f6",
}: Props) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
      {title && (
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      )}

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ReLineChart data={data}>
            <CartesianGrid stroke="#27272a" strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(value: string | number) => {
                const date = new Date(String(value));
                return date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });
              }}
              stroke="#71717a"
              fontSize={12}
            />
            <YAxis stroke="#71717a" fontSize={12} />
            <Tooltip
              labelFormatter={(value) =>
                new Date(String(value)).toLocaleTimeString()
              }
              contentStyle={{
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </ReLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}