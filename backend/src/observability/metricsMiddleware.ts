import type {Request,Response,NextFunction} from 'express';
import {httpRequestsTotal,httpRequestsInProcess,httpRequestDurationSeconds} from "./metrics.ts";


export function metricsMiddleware(req:Request,res:Response,next:NextFunction){
    const startTime = process.hrtime()
    httpRequestsInProcess.inc()
    res.on('finish',()=>{
        const diff = process.hrtime(startTime);
        const durationInSeconds = diff[0] + diff[1] / 1e9;

        const method = req.method;
        const status = res.statusCode.toString();
        const route= req.route?.path ||
        req.path || "unknownRoute";

        httpRequestsTotal.inc({method,route,statusCode:status});
        httpRequestDurationSeconds.observe({method,route},durationInSeconds);
        httpRequestsInProcess.dec();

      
    })
    next();
}