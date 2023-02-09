const PostObject = require("./postObject");
const Restaurant = require("./Restaurant");
const User = require("./User");

User.hasMany(PostObject, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
  });
  
  PostObject.belongsTo(User, {
    foreignKey: 'userID'
  });
  
  Restaurant.hasMany(PostObject, {
    foreignKey: 'restaurantID',
    onDelete: 'CASCADE'
  });
  
  PostObject.belongsTo(Restaurant, {
    foreignKey: 'restaurantID'
  });
  

module.exports = { PostObject, Restaurant, User };