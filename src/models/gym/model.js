'use strict';

const Gym = (sequelize, DataTypes) => sequelize.define('gym', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
});

module.exports = Gym;

