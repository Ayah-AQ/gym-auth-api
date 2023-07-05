'use strict';
const Users = require('../../auth/models/users');

const classes = (sequelize, DataTypes) => {
  const ClassModel = sequelize.define('Class', {
    name: { type: DataTypes.STRING, required: true },
    effort: { type: DataTypes.ENUM('hard', 'medium', 'easy'), required: true }
  });

  // Define associations
  ClassModel.belongsTo(Users, { foreignKey: 'userId' });

  return ClassModel;
};

module.exports = classes;
