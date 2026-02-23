import { TimeSeriesMetric } from "@/types/metrics";

function generateMockSeries(
  name: string,
  base: number
): TimeSeriesMetric {
  const now = Date.now();

  const data = Array.from({ length: 20 }).map((_, i) => ({
    timestamp: new Date(now - (19 - i) * 60000).toISOString(),
    value: base + Math.floor(Math.random() * 50),
  }));

  return { name, data };
}

export const latencySeries = generateMockSeries("Latency", 200);
export const requestSeries = generateMockSeries("Requests", 100);
export const errorSeries = generateMockSeries("Errors", 2);

import { Trace } from "@/types/trace";

export const mockTraces: Trace[] = [
  {
    traceId: "abc123",
    service: "auth-service",
    duration: 420,
    timestamp: Date.now(),
    spans: [
      { id: "1", name: "HTTP Request", startTime: 0, duration: 420, service: "auth-service" },
      { id: "2", name: "DB Query", startTime: 100, duration: 150, service: "database" },
      { id: "3", name: "Token Generation", startTime: 260, duration: 120, service: "auth-service" },
    ],
  },
  {
    traceId: "def456",
    service: "payment-service",
    duration: 650,
    timestamp: Date.now() - 60000,
    spans: [
      { id: "1", name: "HTTP Request", startTime: 0, duration: 650, service: "payment-service" },
      { id: "2", name: "Auth Check", startTime: 50, duration: 200, service: "auth-service" },
      { id: "3", name: "DB Write", startTime: 300, duration: 250, service: "database" },
    ],
  },
];

import { Log } from "@/types/logs";

export const mockLogs: Log[] = [
  {
    id: "1",
    timestamp: Date.now(),
    service: "auth-service",
    level: "INFO",
    message: "User login request received",
    traceId: "abc123",
  },
  {
    id: "2",
    timestamp: Date.now() - 10000,
    service: "database",
    level: "ERROR",
    message: "Connection timeout",
    traceId: "abc123",
  },
  {
    id: "3",
    timestamp: Date.now() - 20000,
    service: "payment-service",
    level: "WARN",
    message: "Slow external API response",
    traceId: "def456",
  },
];