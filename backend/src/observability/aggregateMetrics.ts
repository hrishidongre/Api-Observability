import {prisma} from '../prisma/client.ts';

export async function
aggregateMetrics(windowMinutes: number) {
    const interval = `${windowMinutes} minutes`;

   await prisma.$executeRawUnsafe(
    `insert into service_metrics
    (
    service,
    window_start,
    window_end,
    request_count,
    error_count,
    error_rate,
    avg_latency_ms,
    p95_latency_ms
    )
    select
    service,
    now() - interval '${interval}',
      now(),
      COUNT(*) AS request_count,
      COUNT(*) FILTER (WHERE status >= 500) AS error_count,
      COUNT(*) FILTER (WHERE status >= 500)::FLOAT / COUNT(*) AS error_rate,
      AVG(duration_ms) AS avg_latency_ms,
      percentile_cont(0.95)
        WITHIN GROUP (ORDER BY duration_ms) AS p95_latency_ms
    FROM requests
    WHERE timestamp >= now() - interval '${interval}'
    GROUP BY service;
    
    `)
}