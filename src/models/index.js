'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const foodModel = require('./food/model');
const Equipment = require('./equipments/modal');
const Gym = require('./gym/model');
const Scedual = require('./scedual/modal');
const Trainer = require('./trainor/modal');
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
          {} //the empty object
      
      let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);



const food = foodModel(sequelize, DataTypes);
const equipment = Equipment(sequelize, DataTypes);
const gym = Gym(sequelize, DataTypes);
const scedual = Scedual(sequelize, DataTypes);
const trainer = Trainer(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  equipment: new Collection(equipment),
  gym: new Collection(gym),
  scedual: new Collection(scedual),
  trainer: new Collection(trainer),
  users: userModel(sequelize, DataTypes),
};