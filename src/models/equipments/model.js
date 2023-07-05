'use strict';

const equipments = (sequelize, DataTypes) => sequelize.define('equipment', {
  name: { type: DataTypes.STRING, required: true },
  type: { type: DataTypes.ENUM('weghit', 'walk', 'arms', 'legs', 'sholders', 'fullBody'), required: true }
});

module.exports = equipments;

// check the notes on your note book