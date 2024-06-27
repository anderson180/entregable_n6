const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Category = sequelize.define('modelName', {
    campo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Category;