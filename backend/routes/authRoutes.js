import express from "express";
import { login } from "../controllers/AuthController.js";
import {loginSchema} from "../schemas/loginSchema.js";
import validate from "../middleware/validate.js";

const router = express.Router();

//validates user req of input email and password before sending to login auth controller
router.post("/login",validate(loginSchema),login);

export default router;