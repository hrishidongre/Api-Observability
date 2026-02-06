-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "service" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "duration_ms" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "requests_timestamp_idx" ON "requests"("timestamp");

-- CreateIndex
CREATE INDEX "requests_service_idx" ON "requests"("service");

-- CreateIndex
CREATE INDEX "requests_route_idx" ON "requests"("route");
