import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * SECURITY HARDENING MIDDLEWARE
 * 
 * 1. Rate Limiting: Limits requests per IP to prevent abuse.
 * 2. Security Headers: Adds OWASP-recommended headers to every response.
 */

// RATE LIMIT CONFIGURATION
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 100; // 100 requests

// Simple in-memory store for rate limiting (Note: In a distributed/serverless environment, use Redis/Memcached)
// This Map stores valid IPs and their request timestamps.
const rateLimitMap = new Map<string, { count: number; startTime: number }>();

export function middleware(request: NextRequest) {
    const ip = request.ip || '127.0.0.1'; // Fallback for local development

    // --- 1. ADVANCED RATE LIMITING ---

    const currentTimestamp = Date.now();
    const clientData = rateLimitMap.get(ip);

    if (clientData) {
        if (currentTimestamp - clientData.startTime > RATE_LIMIT_WINDOW_MS) {
            // Reset window if time passed
            rateLimitMap.set(ip, { count: 1, startTime: currentTimestamp });
        } else {
            // Increment count
            clientData.count++;

            if (clientData.count > MAX_REQUESTS_PER_WINDOW) {
                // RATE LIMIT EXCEEDED - Fail gracefully
                return new NextResponse(
                    JSON.stringify({
                        error: "Too Many Requests",
                        message: "You have exceeded the maximum number of requests. Please try again later."
                    }),
                    { status: 429, headers: { 'Content-Type': 'application/json' } }
                );
            }
        }
    } else {
        // New visitor
        rateLimitMap.set(ip, { count: 1, startTime: currentTimestamp });
    }

    // Cleanup old entries periodically (optional optimization for memory)
    // strict cleanup not implemented here to avoid blocking main thread, using simple overwrite logic mostly.

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
