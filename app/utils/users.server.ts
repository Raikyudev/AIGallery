/*import { prisma } from "./prisma.server";
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
        phoneNumber: 0
      },
    })
    return { id: newUser.customerID, email: user.email }
  }
  */
  import {hashPassword, verifyPassword} from './auth-utils.server'
  import {db} from './db.server'
  
  export const userSignup = async (email: string, password: string, customerFirstName: string,customerLastName:string,username:string, phoneNumber:string) => {
    const hashedPassword = await hashPassword(password)
    return db.customers.create({
      data: {
        email: email,
        password: password,
        customerFirstName: customerFirstName,
        customerLastName: customerLastName,
        username: "WIP",
        phoneNumber: 0
      },
    })
  }
  
  export const checkUserExists = async (email: string) =>
    (await db.customers.count({
      where: {email},
    })) > 0
  
  export const userLogin = async (email: string, password: string) => {
    const user = await db.customers.findFirst({where: {email}})
    if (!user) {
      throw new Error('User not found')
    }
  
    const {result, error, improvedHash} = await verifyPassword(
      user.password,
      password,
    )
  
    if (result === 'INVALID') {
      throw error ? error : new Error('Invalid Password')
    }
  

  }