/*import {redirect, json} from '@remix-run/node'
import type {ActionFunction} from '@remix-run/node'
import {UserForm} from '~/components/UserForm'
import {checkUserExists, userSignup} from '~/utils/users.server'
import {Signup} from '~/utils/validations'
import {useActionData, useTransition} from '@remix-run/react'
import {Button} from '~/components/Button'
import { PrismaClient } from '@prisma/client'
import { useLoaderData } from '@remix-run/react'

export function badRequest<TActionData>(data: TActionData, status = 400) {
  return json<TActionData>(data, {status})
}

type ActionData = {
  error?: {
    formError?: string[]
    fieldErrors?: {
      email?: string[]
      password?: string[]
    }
  }
  fields?: {
    email: string
    password: string
  }
}

export const action: ActionFunction = async ({request}) => {
  const form = await request.formData()
  const rawEmail = form.get('email')
  const rawPassword = form.get('password')

  if (typeof rawEmail !== 'string' || typeof rawPassword !== 'string') {
    return badRequest<ActionData>({
      error: {formError: [`Form not submitted correctly.`]},
    })
  }

  const fields = {email: rawEmail, password: rawPassword}

  const result = Signup.safeParse({
    email: rawEmail,
    password: rawPassword,
  })

  if (!result.success) {
    const error = result.error.flatten()

    return badRequest<ActionData>({fields, error})
  }

  const {email, password} = result.data

  const userExists = await checkUserExists(email)

  if (userExists) {
    return badRequest<ActionData>({
      fields,
      error: {formError: [`User with ${rawEmail} already exists`]},
    })
  }

  const user = await userSignup(email, password,)

  if (user) {
    return redirect('/login')
  } else {
    return badRequest<ActionData>({
      fields,
      error: {formError: [`Something went wrong, please contact support.`]},
    })
  }
}

export async function action({request}){
  const formData = await request.formData()
    const prisma = new PrismaClient();
    const allUsers = await prisma.customers.create({
    data: {customerFirstName: formData.get("customerFirstName"),
    customerLastName: formData.get("customerLastName"), 
    username: formData.get("username"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    password:formData.get("password")}
  });
  await prisma.$disconnect();
  return true;
}
export default function IndexRoutes(){
  const projects = useLoaderData();
  const { state } = useTransition();
  const busy = state === "submitting";

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-xl text-slate-800 mb-8">Sign up</h1>
      <UserForm error={error} fields={fields}>
        <Button type="submit" disabled={transition.state !== 'idle'}>
          {transition.state === 'submitting' || 'loading'
            ? 'Sign up'
            : 'Signing up....'}
        </Button>
      </UserForm>
    </div>
  )
}
*/
export default{};