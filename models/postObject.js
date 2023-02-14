// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class PostObject extends Model {}

// PostObject.init(
//     {
//         postID: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//         },
//         userID: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'user',
//                 key: 'id',
//               },
//         },
//         userName: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         reviewBody: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         resaurantID: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'restaurant',
//                 key: 'id',
//               },
//         }
//     },
//     {
//         sequelize,
//         underscored: true,
//         modelName: 'postobject'
//     }
// );

// module.exports = PostObject;