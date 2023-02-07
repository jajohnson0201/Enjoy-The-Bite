const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Restaurant extends Model {}

Restaurant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5],
            },
        },
        foodRating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5],
            },
        },
        locationRation: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5],
            },
        }
    },
    {   
        sequelize,
        underscored: true,
        modelName: 'restaurant'
    }
);

module.exports = Restaurant;