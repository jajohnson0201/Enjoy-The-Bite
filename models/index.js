const User = require("./User");
const Review = require("./Review");
const Restaurant = require("./Restaurant");

User.hasMany(Review, {
  foreignKey: 'userID',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'userID'
});

Restaurant.hasMany(Review, {
  foreignKey: 'restaurantID',
  onDelete: 'CASCADE'
});

Review.belongsTo(Restaurant, {
  foreignKey: 'restaurantID'
});


module.exports = { Review, Restaurant, User };