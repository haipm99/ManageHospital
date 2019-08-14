//3rd package
const express = require('express');
const mongoose = require('mongoose');
const bodyParder = require('body-parser');

//connect database 

const uri = "mongodb://localhost:27017/ManageEmployee";

mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {
        console.log("connect success");
    }).catch(console.log);

//init server

const app = express();

//middle ware - body parser

app.use(bodyParder.urlencoded({ extended: false }));
app.use(bodyParder.json());
// enable cors 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//routes
app.use('/api/account', require('./route/api/api_account'));
app.use('/api/room', require('./route/api/api_room'));
app.use('/api/emp', require('./route/api/api_employee'));
app.use('/api/grade',require('./route/api/api_grade'));
// listen 

app.listen(5000, () => {
    console.log("app is running at port 5000");
})