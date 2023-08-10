const mongoose = require('mongoose');

const {Schema} = mongoose
const JWT = require('jsonwebtoken');
const userScehma = new Schema({

    name: {
        type: String,
        required: [true,  'user name is required '],
        minLength: [5, 'Name must be at least 5 char'],
        maxLength:[20, 'Name must be less than 20 char'],
        trim: true
    },
    email: {
        type: String,
        required: [true,'user email is required '],
        unique: true,
        lowercase: true,
        unique: [true, 'already registered ']
    },
    password: {
        type : String,
    },
    forgorPasswordToken:{
        type: String
    },
    forPasswordExpiryDate:{
        type: Date
    }
    

},{
    timestamps:true
});

userScehma.methods = {
    jwtToken() {
        return JWT.sign(
            {id:this._id, email: this.email},
            process.env.SECRET,
            {expiresIn: '24hr'}
        ) 

    }
}

const userModel = mongoose.model('user',userScehma);
module.exports = userModel;

