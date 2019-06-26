module.exports = async () => {
    const Users = require('./models/users.model');
    const Tasks = require('./models/Tasks.model');

    Users.hasMany(Tasks, {as: 'Tasks', foreignKey: 'userId' });
    Tasks.hasMany(Users, {as: 'Users', foreignKey: 'userId' });

    const handlerError = (err) => {
        console.log('err', err);
    };

    const user = await Users.create({
        firstName: 'andrey',
        lastName: 'pavlov',
        email: 'andreypavlov@gamail.com',
        password: '12345'
    })
      .catch(handlerError);

    Tasks.create({
        task: 'this is actually my first task andrey',
        userId: user.id,

    })
      .catch(handlerError);
};
