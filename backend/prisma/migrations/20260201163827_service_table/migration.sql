-- CreateTable
CREATE TABLE "service_metrics" (
    "id" SERIAL NOT NULL,
    "service" TEXT NOT NULL,
    "window_start" TIMESTAMP(3) NOT NULL,
    "window_end" TIMESTAMP(3) NOT NULL,
    "request_count" INTEGER NOT NULL,
    "error_count" INTEGER NOT NULL,
    "error_rate" DOUBLE PRECISION NOT NULL,
    "avg_latency_ms" DOUBLE PRECISION NOT NULL,
    "p95_latency_ms" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "service_metrics_service_idx" ON "service_metrics"("service");

-- CreateIndex
CREATE INDEX "service_metrics_window_start_idx" ON "service_metrics"("window_start");
