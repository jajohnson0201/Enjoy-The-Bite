const PostObject = require("./postObject");
const Restaurant = require("./Restaurant");
const User = require("./User");

PostObject.belongsTo(User,);

module.exports = { PostObject, Restaurant, User };