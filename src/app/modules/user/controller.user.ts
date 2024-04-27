import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { userService } from "./service.user";

// const createAdmin = catchAsync(async (req: Request, res: Response) => {
//   console.log(req.body);
//   const result = await userService.createAdmin(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Admin Created successfully!",
//     data: result,
//   });
// });
const createAdmin = async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    const result = await userService.createAdmin(req.body);
    res.status(200).json({
      success: true,
      message: "Admin Created successfuly!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

export const userController = {
  createAdmin,
};
