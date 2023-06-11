import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest, res: NextResponse) => {
  const token = req.cookies.get("token");
  if (token === undefined) {
    if (
      req.url === "https://gocafe.vercel.app/login" ||
      req.url.startsWith("https://gocafe.vercel.app/_next")
    )
      return NextResponse.next();
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
};
