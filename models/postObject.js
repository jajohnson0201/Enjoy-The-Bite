const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PostObject extends Model {}

PostObject.init(
    {
        postID: {
            type: DataTypes.INTEGER,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reviewBody: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'postobject'
    }
);

module.exports = PostObject;