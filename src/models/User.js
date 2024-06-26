const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('modelName', {
    fisrtName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = User;