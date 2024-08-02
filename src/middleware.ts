import { type NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';

import { cookieName, fallbackLng, languages } from '@/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
  ],
};

export const middleware = ({ cookies, headers, nextUrl, url }: NextRequest) => {
  const cookie = cookies.get(cookieName)?.value;
  const acceptLng = headers.get('Accept-Language');
  const lng = acceptLanguage.get(cookie || acceptLng) || fallbackLng;

  // Redirect if lng in path is not supported
  const pathHasLng = languages.some((language) =>
    nextUrl.pathname.startsWith(`/${language}`)
  );
  const isInternalNextPath = nextUrl.pathname.startsWith('/_next');

  if (!pathHasLng && !isInternalNextPath) {
    return NextResponse.redirect(new URL(`/${lng}${nextUrl.pathname}`, url));
  }

  const referer = headers.get('referer');

  if (referer) {
    const refererUrl = new URL(referer);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }
    return response;
  }

  return NextResponse.next();
};
