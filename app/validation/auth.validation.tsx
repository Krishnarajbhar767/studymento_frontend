import * as z from "zod";

export const loginSchema = z.object({
    email: z.email({ error: "Enter a valid email" }),
    password: z
        .string({
            error: "password is required",
        })
        .min(1, { error: "Password cannot be empty." })
        .trim()
        .toLowerCase(),
});

export const signupSchema = z.object({
    name: z
        .string()
        .trim()
        .nonempty({ message: "Name is required." }) // check emptiness first
        .min(3, { message: "Your name must be at least 3 characters." })
        .max(30, { message: "Your name must be at most 30 characters." }),

    email: z
        .string()
        .trim()
        .nonempty({ message: "Email is required." })
        .email({ message: "Enter a valid email." }),

    password: z
        .string()
        .nonempty({ message: "Password is required." })
        .min(8, { message: "Password must be at least 8 characters." })
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[^\s]+$/, {
            message: "Password must contain letters, numbers, and no spaces.",
        }),
});

export type ISignUpFormValues = z.infer<typeof signupSchema>;
export type ILoginForm = z.infer<typeof loginSchema>;
