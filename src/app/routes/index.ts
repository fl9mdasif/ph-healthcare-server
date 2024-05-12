import express from "express";
import { userRouter } from "../modules/user/router.user";
import { AdminRoutes } from "../modules/admin/router.admin";
import { AuthRoutes } from "../modules/auth/routes.auth";
import { SpecialtiesRoutes } from "../modules/specialties/router.specialties";
import { DoctorRoutes } from "../modules/doctor/route.doctor";
import { PatientRoutes } from "../modules/patient/router.patient";
import { ScheduleRoutes } from "../modules/schedule/router.schedule";
import { DoctorScheduleRoutes } from "../modules/doctorSchedule/route.doctorSchedule";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/specialties",
    route: SpecialtiesRoutes,
  },
  {
    path: "/doctor",
    route: DoctorRoutes,
  },

  {
    path: "/patient",
    route: PatientRoutes,
  },
  {
    path: "/schedule",
    route: ScheduleRoutes,
  },

  {
    path: "/doctor-schedule",
    route: DoctorScheduleRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
