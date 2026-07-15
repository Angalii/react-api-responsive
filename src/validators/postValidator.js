import { z } from "zod";

export const postSchema = z.object({
    title: z
        .string()
        .trim()
        .min(5, "El título del expediente debe tener al menos 5 caracteres.")
        .max(50, "El título es demasiado largo (máximo 50 caracteres)."),
    body: z
        .string()
        .trim()
        .min(10, "La bitácora es muy corta. Detalla un poco más lo sucedido (mínimo 10 caracteres).")
        .max(1000, "Has excedido el límite de caracteres para la bitácora.")
});