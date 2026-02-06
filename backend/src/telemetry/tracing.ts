import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { AsyncLocalStorageContextManager } from "@opentelemetry/context-async-hooks";

const traceExporter = new OTLPTraceExporter({
  url: "http://localhost:4318/v1/traces",
});

export const otelSDK = new NodeSDK({
  resource: resourceFromAttributes({
    [SemanticResourceAttributes.SERVICE_NAME]: "backend-api",
  }),
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()],
  contextManager: new AsyncLocalStorageContextManager(), 
});

export async function startTracing() {
  try {
    await otelSDK.start();
    console.log("opentelemetry tracing initialized");
  } catch (error) {
    console.error("error initializing opentelemetry tracing", error);
  }
}
