'use strict';

const Equipment = (sequelize, DataTypes) => sequelize.define('equipment', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
});

module.exports = Equipment;

