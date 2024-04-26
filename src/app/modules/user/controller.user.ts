import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { userService } from "./service.user";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await userService.createAdmin(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Created successfully!",
    data: result,
  });
});

export const userController = {
  createAdmin,
};
