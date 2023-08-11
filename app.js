const express = require('express');
const app = express();
const authRouter = require('./routes/authRoute');
const databaseconnect = require('./config/databaseConfing');
const cookieParser = require('cookie-parser');

databaseconnect();
app.use(express.json()); // to parse /read json
app.use(cookieParser());


app.use('/api/auth/',authRouter);


app.use('/',(req,res) => {

    res.status(200).json({data:'Singn-in and Sign-up Server'});

});
module.exports = app;