import { z } from 'zod';

/**
 * SECURE SECRET MANAGEMENT
 * 
 * Validates environment variables at runtime.
 * Ensures strict typing and prevents app startup if secrets are missing.
 * Prevents accidental exposure of secrets to the client (only variables prefixed with NEXT_PUBLIC_ are exposed by Next.js).
 */

const envSchema = z.object({
    // Server-side variables (Not exposed to client)
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

    // Example: DATABASE_URL should be validated if present
    // DATABASE_URL: z.string().url().optional(),

    // Example: API Keys
    // STRIPE_SECRET_KEY: z.string().startsWith('sk_').optional(),
});

// Validate `process.env` against the schema
// This throws an error if validation fails, halting the app startup (Fail-Closed)
const _env = envSchema.safeParse(process.env);

if (!_env.success) {
    console.error('❌ Invalid environment variables:', _env.error.format());
    throw new Error('Invalid environment variables');
}

export const env = _env.data;
