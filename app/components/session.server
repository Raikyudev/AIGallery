
import { createCookieSessionStorage } from "@remix-run/node";

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "login_session", 
    sameSite: "lax", 
    path: "/", 
    httpOnly: true, 
    secrets: ["pass123"],
    secure: process.env.NODE_ENV === "production", 
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage