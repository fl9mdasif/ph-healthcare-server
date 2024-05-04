import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { userService } from "./service.user";
import { IFile } from "../../interface/file";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const file = req.file as IFile;
  const data = req.body;

  const result = await userService.createAdmin(file, data);
  // console.log(file);
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
