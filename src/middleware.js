import { NextResponse } from 'next/server'
import nextAuthMiddleware from "next-auth/middleware"

let locales = ['en', 'de']
let defaultLocale = 'en'

function getLocale(acceptLanguage) {
    const parsedLanguages = acceptLanguage
        ? acceptLanguage.split(',').map(lang => lang.trim().split(';')[0].split('-')[0])
        : [];

    console.log(parsedLanguages)

    // Use Intl to find the best match language
    const selectedLocale = Intl.getCanonicalLocales(parsedLanguages)
        .find(candidate => locales.includes(candidate)) || defaultLocale;

    return selectedLocale;

}

export function middleware(request) {
    // cancel if exception
    const pathname = request.nextUrl.pathname
    const { headers } = request
    const isException = ['/img', '/preview', '/icons', '/logo.svg', '/api', '/manifest.json', '/sendEmail.php', '/sendGeneralEmail.php', '/sw.js'].some((allowedPath) =>
        pathname.startsWith(`${allowedPath}`),
    );
    if (isException) return;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        console.log("al", headers.get('accept-language'))
        const locale = getLocale(headers.get('accept-language'))
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        )
    }

    // check if auth is required
    if (pathname.includes("/user")) {
        // check & handle if logged in
        const nextAuthResponse = nextAuthMiddleware(request)
        if (nextAuthResponse) {
            return nextAuthResponse
        }
    }

    // Continue if no NextAuth middleware response
    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next).*)',
    ],
}

