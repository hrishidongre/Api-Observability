export type MetricPoint = {
  timestamp:string
  value:number
}

export type TimeSeriesMetric = {
  name:string
  data:MetricPoint[]
}