import { DataSource } from 'typeorm'
import env from './env'

const db = new DataSource({
  type: 'postgres',
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT),
  database: env.DB_NAME,
  username: env.DB_USER,
  password: env.DB_PASS,
  synchronize: false,
  logging: false,
  entities: ['./src/database/entities/*.entity.ts'],
  migrations: ['./src/database/migrations/*-migrate.ts'],
  subscribers: [],
})

export default db
