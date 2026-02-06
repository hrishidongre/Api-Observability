import { Router } from "express";
import { logger } from "../logger/logger.ts";

const router = Router();

router.get("/",(req,res)=>{
    logger.info("health endpoint is called")
    res.json({status:"ok"})
})

export default router;