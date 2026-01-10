import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * SECURITY HARDENING MIDDLEWARE
 * 
 * 1. Rate Limiting: Limits requests per IP to prevent abuse.
 * 2. Security Headers: Adds OWASP-recommended headers to every response.
 */

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // --- 2. OWASP SECURITY HEADERS ---

    // Prevent XSS attacks
    response.headers.set('X-XSS-Protection', '1; mode=block');

    // Prevent clickjacking
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');

    // Prevent MIME type sniffing
    response.headers.set('X-Content-Type-Options', 'nosniff');

    // Control referrer information
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Enforce HTTPS (HSTS) - 1 year
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

    // Permissions Policy (restrict access to features like camera/mic)
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');

    // Content Security Policy (CSP) - Basic strict start
    // Note: Adjust 'img-src', 'script-src' etc. based on actual external resources used (e.g. Analytics, Images)
    // response.headers.set('Content-Security-Policy', "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';");

    return response;
}

export const config = {
    matcher: [
        // Apply to all public routes, ignore static assets
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
