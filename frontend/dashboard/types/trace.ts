export type Span = {
  id:string;
  name:string
  startTime:number
  duration:number
  service:string
}

export type Trace = {
  traceId:string
  service:string
  duration:number
  timestamp:number
  spans:Span[]
}