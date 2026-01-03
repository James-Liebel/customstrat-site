import { z } from "zod";

/**
 * STRICT INPUT VALIDATION & SANITIZATION
 * 
 * Uses Zod to enforce strict schemas for all inputs.
 * Rule: Fail-Closed approach - Reject requests with unexpected fields.
 */

// Example: Generic Schema Factory for strict API inputs
export const createStrictSchema = <T extends z.ZodRawShape>(shape: T) => {
    return z.object(shape).strict(); // .strict() forbids unknown keys (Anti-Mass Assignment)
};

// --- COMMON VALIDATION PATTERNS ---

export const commonValidators = {
    // UUID Validation
    uuid: z.string().uuid({ message: "Invalid UUID format" }),

    // Email Validation with sanitization (trim, lowercase)
    email: z.string().email().min(5).max(255).trim().toLowerCase(),

    // Safe String (prevent injection by disallowing dangerous chars if needed, though Zod/params usually safe)
    // For SQL/NoSQL injection, use ORMs. Here we limit length and characters.
    safeString: z.string().min(1).max(1000).regex(/^[a-zA-Z0-9_\-\s.]+$/, "Invalid characters detected"),
};

// --- DOMAIN EXAMPLES ---

/**
 * Example Contact Form Validation
 * Enforces specific lengths and types.
 */
export const ContactFormSchema = createStrictSchema({
    name: z.string().min(2, "Name too short").max(100, "Name too long"),
    email: commonValidators.email,
    message: z.string().min(10, "Message too short").max(5000, "Message too long"),
    // Honeypot field - should be empty/undefined usually, but strict mode handles 'extra' fields via 400 error.
    // Explicit honeypot handling can be added if needed.
});

/**
 * Example User Profile Input
 * strict() prevents users from injecting 'role: admin' or other protected fields.
 */
export const UserProfileSchema = createStrictSchema({
    username: z.string().regex(/^[a-zA-Z0-9]+$/, "Must be alphanumeric").min(3).max(30),
    bio: z.string().max(300).optional(),
});
