const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// class Restaurant extends Model {}

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
        foodRating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: [5],
            },
        },
        locationRation: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: [5],
            },
        },
    },
    {   
        sequelize,
        underscored: true,
        modelName: 'restaurant',
        freezeTableName: true
    }
);

// module.exports = Restaurant;