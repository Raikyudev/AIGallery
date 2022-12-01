import { prisma } from "./prisma.server";
import { RegisterForm } from "./types.server";
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client";

export const createUser = async (user: RegisterForm) => {
    const prisma = new PrismaClient();
    const passwordHash = await bcrypt.hash(user.password, 10)
    const newUser = await prisma.customers.create({
      data: {
        email: user.email,
        password: passwordHash,
        customerFirstName: user.firstName,
        customerLastName: user.lastName,
        username: "WIP",
        phoneNumber: "0"
      },
    })
    return { id: newUser.customerID, email: user.email }
  }