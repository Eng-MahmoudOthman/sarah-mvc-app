import { Router } from "express";
import { logOutController, userController } from "./user.controller.js";

const router = Router() ;

router.get("/user" , userController)
router.get("/logout" , logOutController)

export default router ;
