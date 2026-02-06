import {prisma} from "../prisma/client.ts";

export async function latestMetrics(service:string){
    return await prisma.serviceMetrics.findFirst({
        where:{service},
        orderBy:{windowEnd:'desc'},
    })
}