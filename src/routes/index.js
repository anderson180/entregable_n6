const express = require('express');
const routerUser = require('./user.router');
const routerProduct = require('./product.router');
const routerCategory = require('./category.router');
const routerCart = require('./cart.router');
const { verifyJwt } = require('../utils/verifyJWT');
const router = express.Router();

// colocar las rutas aquí

router.use('/users', routerUser)
router.use('/products', routerProduct)
router.use('/catagories', routerCategory)
router.user('/cart', verifyJwt, routerCart)

module.exports = router;