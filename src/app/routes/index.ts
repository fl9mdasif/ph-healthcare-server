import express from "express";
import { userRouter } from "../modules/user/router.user";
import { AdminRoutes } from "../modules/admin/router.admin";
import { AuthRoutes } from "../modules/auth/routes.auth";
import { SpecialtiesRoutes } from "../modules/specialties/router.specialties";
import { DoctorRoutes } from "../modules/doctor/route.doctor";
import { PatientRoutes } from "../modules/patient/router.patient";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
