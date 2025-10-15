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

export type ILoginFormInput = z.infer<typeof loginSchema>;
