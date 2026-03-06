import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const DB_HOST = process.env.DB_HOST ?? "localhost";
const DB_PORT = process.env.DB_PORT ? Number(process.env.DB_PORT) : 5435;
const DB_USER = process.env.DB_USER ?? "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD ?? "postgres";
const DB_NAME = process.env.DB_NAME ?? "db";

export const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export const db = drizzle(pool);