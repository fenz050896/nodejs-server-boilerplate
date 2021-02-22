import { db } from '../../configs';

const {
  DB_NAME,
  DB_USER,
  DB_PSWD,
  DB_HOST,
  DB_DIALECT,
  DB_PORT,
  DB_TIMEZONE,
} = db;

export default {
  development: {
    username: DB_USER,
    password: DB_PSWD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    timezone: DB_TIMEZONE,
    seederStorage: 'json',
  },
  test: {
    username: DB_USER,
    password: DB_PSWD,
    database: 'database_test',
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    timezone: DB_TIMEZONE,
    seederStorage: 'json',
  },
  production: {
    username: DB_USER,
    password: DB_PSWD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    timezone: DB_TIMEZONE,
    logging: false,
  },
};
