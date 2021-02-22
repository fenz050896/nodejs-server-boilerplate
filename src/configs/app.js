import { env } from '../utils/functions';

export default {
  NODE_ENV: env('NODE_ENV', 'development'),
  APP_NAME: env('APP_NAME', 'Test Server'),
  APP_URL: env('APP_URL', 'http://localhost'),
  SERVER_PORT: env('SERVER_PORT', 5020),
  REDIS_HOST: env('REDIS_HOST', '127.0.0.1'),
  REDIS_PORT: env('REDIS_PORT', 6380),
  EMAIL_SERVICE: env('EMAIL_SERVICE', 'Gmail'), // email service like 'Gmail'
  EMAIL_USER: env('EMAIL_USER', 'infomitrasetiaanda@gmail.com'),
  EMAIL_USER_PASSWORD: env('EMAIL_USER_PASSWORD', 'MitrasetiaandaPassw1'),
  EMAIL_SENDER_NAME: env('EMAIL_SENDER_NAME', 'Mitra Setia Anda'),
  EMAIL_SENDER_EMAIL: env('EMAIL_SENDER_EMAIL', 'no-reply@itcfinance.com'),
  MORGAN_TYPE: env('MORGAN_TYPE', 'combined'),
  JWT_SECRET_KEY: env('JWT_SECRET_KEY', 'supersecretkey'),
};
