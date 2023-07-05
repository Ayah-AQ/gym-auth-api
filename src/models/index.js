'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const gyms = require('./Gym/model');
const sessions = require('./sessions/model');
const classes = require('./classes/model');
const foodModel = require('./food/model');
const equipments = require('./equipments/model');
const Collection = require('./data-collection.js');
const userModel = require('../auth/models/users');

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DB_URL; 
let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    } :
    {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const food = foodModel(sequelize, DataTypes);
const gym = gyms(sequelize, DataTypes);
const session = sessions(sequelize, DataTypes);
const ClassModel = classes(sequelize, DataTypes); // Renamed class_ to ClassModel
const equipment = equipments(sequelize, DataTypes);
const User = userModel(sequelize, DataTypes);

User.hasMany(ClassModel, { foreignKey: 'userId', as: 'classes' });
ClassModel.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  db: sequelize,
  food: new Collection(food),
  gym: new Collection(gym),
  session: new Collection(session),
  class: new Collection(ClassModel), // Updated to use ClassModel
  equipment: new Collection(equipment),
  users: userModel(sequelize, DataTypes),
};
