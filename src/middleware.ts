import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.cookies.set('locale', 'tr');

  return response;
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
