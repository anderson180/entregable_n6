const User = require("./User");
const Product = require("./Product");
const Category = require('./Category');
const Cart = require('./Cart');
const ProductImg = require("./ProductImg");

Product.belongsTo(Category)
Category.hasMany(Product)

Cart.belongsTo(User)
User.hasMany(Cart)

Cart.belongsTo(Product)
Product.hasMany(Cart)

Product.belongsTo(Product)
Product.hasMany(ProductImg)

