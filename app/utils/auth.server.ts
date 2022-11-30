import { json } from "@remix-run/node"
import {prisma} from "./prisma.server"
import { RegisterForm } from "./types.server"


export async function register(user: RegisterForm) {
    const exists = await prisma.customers.count({ where: { email: user.email } })
    if (exists) {
      return json({ error: `User already exists with that email` }, { status: 400 })
    }
  }