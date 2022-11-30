
/*
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/components/auth.server"; 
import { getSession, commitSession } from "~/components/session.server";

export async function action({ request }: ActionArgs) {
  authenticator.authenticate("local", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};

export async function loader({ request }: LoaderArgs) {
  let user = await authenticator.isAuthenticated(request);
  if (user) return redirect("/dashboard");
  return json({});
};

export default function Login() {
  return (
    <Form action="/login" method="post">
      <input type="text" name="username" required />
      <input type="password" name="password" required />
      <button>Log In</button>
    </Form>
  );
}
*/
export {}