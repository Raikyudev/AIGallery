import { createCookieSessionStorage } from "@remix-run/node";
import { createCookie } from "@remix-run/node";

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "items-session",
    },
  });