import dotenv from 'dotenv'
dotenv.config()

export const env = {
  PORT: process.env.PORT ?? null,
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  NODE_KEY: process.env.NODE_KEY,
  LOCALE: process.env.LOCALE ?? 'en',

  ACCESS_TOKEN_SECRETE: process.env.ACCESS_TOKEN_SECRETE ?? '',
  REFRESH_TOKEN_SECRETE: process.env.REFRESH_TOKEN_SECRETE ?? '',

  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT ?? '',
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
}

export default env
