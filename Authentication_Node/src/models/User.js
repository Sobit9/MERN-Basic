const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        required: true,
    },
    verifiedAt:{
        type: String,
        default: null,
    },
    verificationToken:{
        type: String,
        default: null,
    },
    resetToken:{
        type: String,
        default: null,
    }
},
{
    timestamp: true,
})

const User = mongoose.model('User', userSchema);
module.exports = User