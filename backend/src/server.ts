import app from "./app.ts";
import { logger } from "./logger/logger.ts";
import { startTracing } from "./telemetry/tracing.ts";

const PORT = process.env.PORT || 3000;

async function startServer() {
    await startTracing();
    app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
}); 
}

startServer()
