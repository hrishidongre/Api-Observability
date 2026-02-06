import {aggregateMetrics} from "./aggregateMetrics.ts";

export function metricsScheduler(){
    setInterval(async()=>{
        try{
            await aggregateMetrics(1);
            console.log("aggregated metrics started")
        }catch(err){
            console.error("error aggregating metrics", err )
        }

    },60000)
}
