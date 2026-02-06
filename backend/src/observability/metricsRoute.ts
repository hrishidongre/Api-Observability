import type {Request,Response } from "express";
import {register} from "./metrics.ts"

export async function metricsRoute(req:Request,res:Response){
    
    res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
}