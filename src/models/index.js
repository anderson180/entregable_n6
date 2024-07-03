const User = require("./User");
const Product = require("./Product");
const Category = require('./Category');
const Cart = require('./Cart');
const ProductImg = require("./ProductImg");
const Purchase = require('./Purchase')

Cart.belongsTo(User)
User.hasMany(Cart)

Product.belongsTo(Category)
Category.hasMany(Product)

Cart.belongsTo(Product)
Product.hasMany(Cart)

Product.belongsTo(Product)
Product.hasMany(ProductImg)

ProductImg.belongsTo(Product)
Product.hasMany(ProductImg)

Purchase.belongsTo(User)
User.hasMany(Purchase)

Purchase.belongsTo(Product)
Product.hasMany(Purchase)
