const { User } = require('../models');
const { Op, Sequelize } = require('sequelize');
const bcrypt = require('bcryptjs')

exports.findUserByEmail = async (email) => {
    return await User.findOne({ where: { email: email } });
}

exports.createUser = async (userData) => {
    if (userData.name && userData.email && userData.password){
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(formDataObject.password, salt);

        // Create the new user with the hashed password
        const userObject = { name: formDataObject.name, email: formDataObject.email, password: hashedPassword };
        return await User.create(userObject);
    }
}