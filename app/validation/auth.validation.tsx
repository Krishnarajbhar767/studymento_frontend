import * as z from "zod";

export const loginSchema = z.object({
    email: z
        .email({ error: "Enter a valid email." })
        .trim()
        .nonempty({ error: "Email is required." })
        .toLowerCase(),

    password: z
        .string()
        .trim()
        .nonempty({ error: "Password is required." }) // check emptiness first
        .min(8, { error: "Password must be at least 8 characters." })
        .trim(),
});

export const signupSchema = z.object({
    name: z
        .string()
        .trim()
        .nonempty({ error: "Name is required." }) // check emptiness first
        .min(3, { error: "Your name must be at least 3 characters." })
        .max(30, { error: "Your name must be at most 30 characters." })
        .toLowerCase(),

    email: z
        .string()
        .trim()
        .nonempty({ error: "Email is required." })
        .email({ error: "Enter a valid email." })
        .toLowerCase(),

    password: z
        .string()
        .nonempty({ error: "Password is required." })
        .min(8, { error: "Password must be at least 8 characters." })
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[^\s]+$/, {
            error: "Password must contain letters, numbers, and no spaces.",
        }),
});

export type ISignUpFormValues = z.infer<typeof signupSchema>;
export type ILoginValues = z.infer<typeof loginSchema>;
