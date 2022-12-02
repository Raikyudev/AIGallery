import { json, createCookieSessionStorage, redirect} from "@remix-run/node"
import {prisma} from "./prisma.server"
import type { RegisterForm, LoginForm } from "./types.server"
import {createUser} from "./users.server"
import bcrypt from 'bcrypt'

const secret = process.env.SESSION_SECRET
if (!secret) {
  throw new Error('SESSION_SECRET must be set')
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'cookie-session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [secret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export async function register(user: RegisterForm) {
    const exists = await prisma.customers.count({ where: { email: user.email } })
    if (exists) {
      return json({ error: `User already exists with that email` }, { status: 400 })
    }

    const newUser = await createUser(user);

    if (!newUser){
        return json(
            { error: `Something went wrong trying to create a new User` ,  fields: {email:user.email, password: user.password }
    },
    {status:400}
    )
    }
    return createUserSession(String(newUser.id), '/');
}
export const  login = async (form: LoginForm) => {
        
    const user = await prisma.customers.findUnique({
      where: { email: form.email},
    })
    alert(user);
    
    if (!user){
      return json({ error: `Incorrect login` }, { status: 400 })
    }
    await bcrypt.compare(form.password, user.password, function(err,result){
      if(result == false){
        return json({ error: `Incorrect login` }, { status: 400 })
      }else{
        return createUserSession(String(user.customerID),'/')
      }
    })
    
}

export const createUserSession = async(userID: string, redirectTo: string) => {
    const session = await storage.getSession()
    session.set('userID', userID)
    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await storage.commitSession(session)
        }
    })
}


export const getStorage = () =>{
  return storage;
}
