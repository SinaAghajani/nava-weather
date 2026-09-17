import { z } from "zod";

export const coordinatesSchema = z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
});

export const citySearchSchema = z
    .string()
    .trim()
    .min(2)
    .max(100);

export const weatherQuerySchema = z.object({
    latitude: z.coerce.number().min(-90).max(90),
    longitude: z.coerce.number().min(-180).max(180),
});