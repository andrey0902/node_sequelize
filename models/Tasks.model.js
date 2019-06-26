const Sequelize = require('sequelize');

const Tasks = sequelize.define('tasks', {
    // attributes
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    task: {
        type: Sequelize.STRING(300),
        allowNull: false
    }

}, {
    // options
});

module.exports = Tasks;
