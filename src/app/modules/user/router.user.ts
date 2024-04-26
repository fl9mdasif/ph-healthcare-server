import express, { Request, Response } from "express";
import { userController } from "./controller.user";

const router = express.Router();

router.post("/", userController.createAdmin);

export const userRouter = router;
