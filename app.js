const express = require('express');
const app = express();
const authRouter = require('./routes/authRoute');
const databaseconnect = require('./config/databaseConfing');


databaseconnect();
app.use(express.json()); // to parse /read json


app.use('/api/auth/',authRouter);


app.use('/',(req,res) => {

    res.status(200).json({data:'Singn-in and Sign-up Server'});

});
module.exports = app;