import { Router } from "express";
import { register, login } from "./auth.controller";
import ValidInfo from "../../middleware/validInfo";
const authRoutes = Router();

authRoutes.post("/register", ValidInfo, register);
authRoutes.post("/login", login);

export default authRoutes;