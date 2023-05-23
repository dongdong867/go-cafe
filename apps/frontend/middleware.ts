import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest, res: NextResponse) => {
  const token = req.cookies.get('token');
  if (token === undefined) {
    if (
      req.url === 'http://localhost:4200/login' ||
      req.url.startsWith('http://localhost:4200/_next')
    )
      return NextResponse.next();
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
};
