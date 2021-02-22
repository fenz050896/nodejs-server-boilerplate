/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { app } from '../../configs';
import dbConfig from '../config';

const basename = _basename(__filename);
const envVal = app.NODE_ENV;
const config = dbConfig[envVal];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0)
      && (file !== basename)
      && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
