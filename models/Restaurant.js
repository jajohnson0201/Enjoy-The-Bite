const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Restaurant extends Model {}

Restaurant.init(
    {
        id: {}
    }
);

module.exports = Restaurant;