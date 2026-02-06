import {Router} from "express"
import {latestMetrics} from "../services/metricsService.ts"

const router = Router()

router.get("/:service/metrics",async (req,res)=>{
    const {service} = req.params;
    const metrics = await latestMetrics(service);
    if(!metrics){
        return res.status(404).json({error:"No metrics found"})
    }
    res.json(metrics);

})

export default router;