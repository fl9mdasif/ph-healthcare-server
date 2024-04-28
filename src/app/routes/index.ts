import express from "express";
import { userRouter } from "../modules/user/router.user";
import { AdminRoutes } from "../modules/admin/router.admin";
import { AuthRoutes } from "../modules/auth/routes.auth";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
