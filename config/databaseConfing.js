const mongoose = require("mongoose")

MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/my_database";

const databaseconnect = async()=> {
    mongoose
    .connect(MONGODB_URL)
    .then((conn)=>
        console.log(`Connected to the Data base : ${conn.connection.host}`))
    .catch((err)=>console.log (err.message));
    
}
module.exports = databaseconnect;