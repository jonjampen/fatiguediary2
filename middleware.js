import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import nextAuthMiddleware from "next-auth/middleware"

let locales = ['en', 'de']
let defaultLocale = 'en'

function getLocale(request) {
    let headers = { 'accept-language': 'en' }
    // primarily set based on settings if provided
    let languages = new Negotiator({ headers }).languages()
    return match(languages, locales, defaultLocale) // -> 'en'
}

export function middleware(request) {
    // cancel if exception
    const pathname = request.nextUrl.pathname
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
        const locale = getLocale(request)
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

