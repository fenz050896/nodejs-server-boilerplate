import { env } from '../utils/functions';

export default {
  DB_NAME: env('DB_NAME', 'test_server'),
  DB_DIALECT: env('DB_DIALECT', 'postgres'),
  DB_HOST: env('DB_HOST', 'localhost'),
  DB_PORT: env('DB_PORT', '5432'),
  DB_PSWD: env('DB_PSWD', 'ITCFinance321'),
  DB_TIMEZONE: env('DB_TIMEZONE', '+07:00'),
  DB_USER: env('DB_USER', 'admin_db'),
};
