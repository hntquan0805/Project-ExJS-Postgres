const { User } = require('../models');
const { Op, Sequelize } = require('sequelize');

exports.findUserById = async (id) => {
    return await User.findByPk(id);
}

exports.findUserByEmail = async (email) => {
    return await User.findOne({ where: { email: email } });
}

exports.createUser = async (userData) => {
    if (userData.name && userData.email && userData.hashedPassword){
        const userObject = { name: userData.name, email: userData.email, password: userData.hashedPassword };
        return await User.create(userObject);
    } else {
        console.log(`One of the field is missing, received data was: ${userData}`);
    }
}