const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reviewBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resaurantID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'restaurant',
                key: 'id',
            },
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
              },
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: 'postobject'
    }
);

module.exports = Review;