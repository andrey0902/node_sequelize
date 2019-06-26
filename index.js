const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
var Promise = require('bluebird');
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('first', 'andrey', 'UIOder65_uio', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "andrey",
//   database : 'first',
//   password: "UIOder65_uio"
// });
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// var knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         host     : '127.0.0.1',
//         user     : 'andrey',
//         password : 'UIOder65_uio',
//         database : 'first',
//         charset  : 'utf8'
//     }
// });


const app = express();
const port = 3000;
var bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// app.use((request, response, next) => {
//    // console.log(request.headers);
//     next();
// });
// app.use((request, response, next) => {
//     request.chance = 'my test data for firs time';
//     next();
// });


app.get('/', (request, response) => {
    response.send('home', {
        name: 'Andrey'
    });
});

const users = [];

app.post('/users', function  (req, res) {
    // извлекаем данные пользователя из тела запроса
    console.log('req.body', req.body);
    const user = req.body;
    users.push({
        name: user.name,
        age: user.age
    });
    res.send('successfully registered')
})


app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err);
    response.status(500).send(`Something broke!`);
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
