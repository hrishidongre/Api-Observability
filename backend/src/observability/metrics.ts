import client from 'prom-client';
// client.collectDefaultMetrics();
// Counter
export const httpRequestsTotal = new client.Counter({
    name: 'total_http_requests',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'statusCode'],
})

// Gauge
export const httpRequestsInProcess = new client.Gauge({
    name:'http_requests_in_process',
    help: 'Number of HTTP requests currently in process',
})

// Histogram
export const httpRequestDurationSeconds = new client.Histogram({
    name: 'http_request_duration_seconds',
    help:' Duration of HTTP requests in seconds',
    labelNames: ["method","route"],
    buckets:[0.05, 0.1, 0.2, 0.3, 0.5, 0.75, 1, 1.5, 2, 3, 5]
})

export const register = client.register;

