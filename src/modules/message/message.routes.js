import { Router } from "express";
import { messageController, messageSend } from "./message.controller.js";

const router = Router() ;

router.get("/message/:id" , messageController)
router.post("/messageSend/:id" , messageSend)

export default router ;