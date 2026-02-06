import express from "express";
import crypto from "crypto";
import { runWithRequestContext } from "./context/requestContext.ts";
import { logger } from "./logger/logger.ts";
import healthRoute from "./routes/health.ts";
import { metricsMiddleware } from "./observability/metricsMiddleware.ts";
import { metricsRoute } from "./observability/metricsRoute.ts";
// import testRouter from "./routes/testRoute.ts";
import servicesRouter from "./routes/services.ts";
const app = express();

app.use(metricsMiddleware);
app.use((req,res,next)=>{
    const requestId = crypto.randomUUID();
    runWithRequestContext({requestId}, ()=>{
        res.setHeader("X-Request-Id", requestId);
        logger.info("incoming req",{
            method:req.method,
            path:req.path
        })
        next();
    })

})

app.use("/health", healthRoute)
app.use("/metrics", metricsRoute);
// app.use("/test", testRouter);

app.use("/services", servicesRouter);
export default app;