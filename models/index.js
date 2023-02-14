const User = require("./User");
const PostObject = require("./postObject");
const Restaurant = require("./Restaurant");

// User.hasMany(PostObject, {
//     foreignKey: 'userID',
//     onDelete: 'CASCADE'
//   });
  
//   PostObject.belongsTo(User, {
//     foreignKey: 'userID'
//   });
  
//   Restaurant.hasMany(PostObject, {
//     foreignKey: 'restaurantID',
//     onDelete: 'CASCADE'
//   });
  
//   PostObject.belongsTo(Restaurant, {
//     foreignKey: 'restaurantID'
//   });
  

// module.exports = { PostObject, Restaurant, User };