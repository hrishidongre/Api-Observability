import {getRequest} from "../context/requestContext.ts"
import { getLogContext } from "./logContext.ts";    


type Loglevel = "info" | "error"

function log(level:Loglevel,message:string,meta?:object
){
    const context = getRequest();
    const logEntry = {
        level,
        message,
        ...getLogContext()
        ,
        requestId:context?.requestId ?? null,
        timestamp: new Date().toISOString(),
        ...meta,
    }
    console.log(JSON.stringify(logEntry));
}

export const logger = {
    info:(message: string, meta?:object) => log("info",message,meta),
    err:(message:string, meta?:object) => log("error", message,meta)
}

