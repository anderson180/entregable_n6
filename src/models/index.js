const User = require("./User");
const Product = require("./Product");
const Category = require('./Category');
const Cart = require('./Cart');

//Product => categoryId
Product.belongsTo(Category)
Category.hasMany(Product)

Cart.belongsTo(User)
User.hasMany(Cart)

Cart.belongsTo(Product)
Product.hasMany(Cart)

