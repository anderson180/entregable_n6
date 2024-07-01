const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const bcryt = require('bcryt');

const User = sequelize.define('user', {
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
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // solo por los que puede ser seteado

    //role: {
    //type: DataTypes.ENUM({
    //   values: ['user', 'admin'],
    //})
    //}
});

User.beforeCreate(async ( user ) =>{
    const password = user.password
    const hashPassword = await bcryt.hash(password, 10)
    user.password = hashPassword
})

module.exports = User;