const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class PostObject extends Model {}

PostObject.init(
    {
        userName: {}
    }
);

module.exports = PostObject;