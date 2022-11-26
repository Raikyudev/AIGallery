import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession, commitSession } from "~/utils/items-session";

export const loader = async ({ request }: { request: Request }) => {
  // Read session from cookie
  const session = await getSession(request.headers.get("Cookie"));

  // Increment by 1 if exists, otherwise set to 1
  const basket: number[] = session.get("basket") || [];

  // Create new cookie string
  session.set("basket", basket);
  const cookie = await commitSession(session);

  // Set new cookie in headers
  return json(
    { basket },
    {
      headers: {
        "Set-Cookie": cookie,
      },
    }
  );
}

const Basket = () => {
  const data = useLoaderData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Basket;