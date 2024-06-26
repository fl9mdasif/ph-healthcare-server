import express from "express";
import { ScheduleController } from "./controller.schedule";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get("/", auth(UserRole.DOCTOR), ScheduleController.getAllFromDB);

/**
 * API ENDPOINT: /schedule/:id
 *
 * Get schedule data by id
 */
router.get(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR),
  ScheduleController.getByIdFromDB
);

router.post(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  ScheduleController.createSchedule
);

router.delete(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  ScheduleController.deleteFromDB
);

export const ScheduleRoutes = router;
