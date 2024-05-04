import { Admin, PrismaClient, UserRole } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { IFile } from "../../interface/file";
import { fileUploader } from "../../../shared/fileUploader";

const prisma = new PrismaClient();
const createAdmin = async (file: IFile, data: any): Promise<Admin> => {
  // console.log(data);

  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
    data.admin.profilePhoto = uploadToCloudinary?.secure_url;
  }

  const hashedPassword: string = await bcrypt.hash(data.password, 12);

  const userData = {
    email: data.admin.email,
    password: hashedPassword,
    role: UserRole.ADMIN,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.user.create({
      data: userData,
    });

    const createdAdminData = await transactionClient.admin.create({
      data: data.admin,
    });

    return createdAdminData;
  });

  return result;
};

export const userService = {
  createAdmin,
};
