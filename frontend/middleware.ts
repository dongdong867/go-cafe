import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest, res: NextResponse) => {
  const token = req.cookies.get("token");
  if (token === undefined) {
    if (
      req.url === "https://gocafe.vercel.app/login" ||
      req.url === "https://dongdong867.dev/login" ||
      req.url === "https://www.dongdong867.dev/login" ||
      req.url.startsWith("https://gocafe.vercel.app/_next") ||
      req.url.startsWith("https://dongdong867.dev/_next") ||
      req.url.startsWith("https://www.dongdong867.dev/_next")
    )
      return NextResponse.next();
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
};
