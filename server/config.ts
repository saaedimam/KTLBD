import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(5000),
  DATABASE_URL: z
    .string()
    .url()
    .default("postgresql://user:password@localhost:5432/appdb"),
  SESSION_SECRET: z.string().default("default_session_secret"),
});

export const env = envSchema.parse(process.env);
