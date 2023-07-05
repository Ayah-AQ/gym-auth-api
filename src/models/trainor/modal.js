'use strict';

const Trainer = (sequelize, DataTypes) => sequelize.define('trainer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Trainer;

