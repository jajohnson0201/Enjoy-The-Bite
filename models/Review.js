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
        reviewBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foodRating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: [5],
            },
        },
        locationRating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: [5],
            },
        },
        overallRating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: [5],
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
        modelName: 'review',
        freezeTableName: true
    }
);

module.exports = Review;