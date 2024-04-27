import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./app/modules/user/router.user";
import { AdminRoutes } from "./app/modules/admin/router.admin";

const app: Application = express();

app.use(cors());

// parse
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "ph healthcare server",
  });
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", AdminRoutes);

export default app;
