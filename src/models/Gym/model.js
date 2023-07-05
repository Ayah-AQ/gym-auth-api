'use strict';

const gyms = (sequelize, DataTypes) => sequelize.define('gym', {
  name: { type: DataTypes.STRING, required: true },
  location: { type: DataTypes.STRING, required: true },
 oppeningHours: { type: DataTypes.STRING, required: true }
});

module.exports = gyms;