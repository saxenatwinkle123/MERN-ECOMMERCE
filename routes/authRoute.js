import express from "express";
import  { registerController} from "../controllers/authController.js"
import  { loginController} from "../controllers/authController.js"
import { requiresSignIn,isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router()

router.post('/register', registerController)
router.post('/login', loginController)
//router.get("/test", requiresSignIn, isAdmin, testController)
export default router