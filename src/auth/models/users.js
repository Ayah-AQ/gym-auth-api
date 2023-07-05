'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'secretstring';

const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, required: true, unique: true },
    password: { type: DataTypes.STRING, required: true },
    role: { type: DataTypes.ENUM('user', 'gymOwner', 'coach', 'admin'), required: true, defaultValue: 'user' },
    token: {
      type: DataTypes.VIRTUAL
    },
    capabilities: {
      type: DataTypes.VIRTUAL,
      get() {
        const acl = {
          user: ['read', 'create'],
          gymOwner: ['read', 'create', 'update', 'delete'],
          coach: ['read', 'update'],
          admin: ['read', 'create', 'update', 'delete']
        };
        return acl[this.role];
      }
    }
  });

  User.beforeCreate(async (user) => {
    let hashedPass = await bcrypt.hash(user.password, 10);
    user.password = hashedPass;
  });

  User.authenticateBasic = async function (username, password) {
    const user = await User.findOne({ where: { username } });
    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      const userToken = jwt.sign({ username: user.username, password: user.password }, SECRET);
      return {
        user,
        token: userToken,
      };
    } else {
      throw new Error('No User');
    }
  };

  User.authenticateToken = async function (token) {
    const parsedToken = jwt.verify(token, SECRET);
    const user = await User.findOne({ where: { username: parsedToken.username } });
    if (user.username) {
      return user;
    } else {
      throw new Error('Invalid Token');
    }
  };

  // Define associations
  User.hasMany(sequelize.models.Class, { foreignKey: 'userId', as: 'classes' });

  return User;
};

module.exports = userModel;
