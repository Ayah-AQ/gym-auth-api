'use strict';

const sessions = (sequelize, DataTypes) => sequelize.define('session', {
  name: { type: DataTypes.STRING, required: true },
  time: { type: DataTypes.INTEGER, required: true },
  type: { type: DataTypes.ENUM('cardio', 'weights', 'dancing', 'boxing', 'swimming'), required: true },
  
});

module.exports = sessions;

// check the notes on your note book