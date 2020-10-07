import { NowRequest, NowResponse } from "@vercel/node";
import { renderToString } from "react-dom/server";

import Footer from "../components/footer";

export default async function (req: NowRequest, res: NowResponse) {
  res.setHeader("Content-Type", "image/svg+xml");

  const svg = renderToString(Footer({ children: null }));
  return res.status(200).send(svg);
}
