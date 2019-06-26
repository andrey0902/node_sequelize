const Sequelize = require('sequelize');

const User = sequelize.define('users', {
    // attributes
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(100)
        // allowNull defaults to true
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    // options
});

 module.exports = User;
