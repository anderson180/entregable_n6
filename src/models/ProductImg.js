const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ProductImg = sequelize.define('productImg', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },

    filename: {
        type: DataTypes.STRING,
        allowNull: false
    }, },
    {

    // Otra columna -productId de uno a muchos

    timestamps: false
});

module.exports = ProductImg;