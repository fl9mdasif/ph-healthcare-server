import express from "express";
import { AuthController } from "./controller.auth";

const router = express.Router();

router.post("/login", AuthController.loginUser);

router.post("/refresh-token", AuthController.refreshToken);

export const AuthRoutes = router;
