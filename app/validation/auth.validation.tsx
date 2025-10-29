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
        .nonempty({ error: "Password is required." })
        .min(8, { error: "Password must be at least 8 characters." })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, {
            error: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        })
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
        .trim()
        .nonempty({ error: "Password is required." })
        .min(8, { error: "Password must be at least 8 characters." })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, {
            error: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        })
        .trim(),
});

export type ISignUpFormValues = z.infer<typeof signupSchema>;
export type ILoginValues = z.infer<typeof loginSchema>;
