import { prisma } from "./prisma.server";
import { RegisterForm } from "./types.server";
import bcrypt from "bcrypt"

export const createUser = async (user: RegisterForm) => {
    const passwordHash = await bcrypt.hash(user.password, 10)
    const newUser = await prisma.customers.create({
      data: {
        email: customers.email,
        password: passwordHash,
        profile: {
          firstName: customers.customerFirstName,
          lastName: customers.customerLastName,
        },
      },
    })
    return { id: newUser.customerID, email: user.email }
  }