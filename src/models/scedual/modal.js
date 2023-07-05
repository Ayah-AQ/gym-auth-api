'use strict';

const Schedule = (sequelize, DataTypes) => sequelize.define('schedule', {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
});

module.exports = Schedule;

