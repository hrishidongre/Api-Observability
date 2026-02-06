import {startTracing} from "./telemetry/tracing.ts"
import {metricsScheduler} from "./observability/metricsScheduler.ts"

async function bootstrap(){
    await startTracing()
    const {default:app} = await import("./app.ts")
    const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    metricsScheduler();
  }); 
}
bootstrap();
