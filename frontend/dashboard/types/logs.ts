export type Log = {
    id:string
    timestamp:number
    service:string
    level:"INFO" | "WARN" | "ERROR"
    message:string
    traceId:string
    
}