const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.clipartmax.com/png/middle/123-1236782_these-are-some-cats-avatar-i-drew-during-my-free-time-portrait.png",
    },
    role: {type:String, default:'user'},
    gender: {type:String, default:'male'},
    mobile: {type:String, default:''},
    address: {type:String, default:''},
    story: {type:String, default:'', maxlenght:200},
    website:{type:String, default:''},
    followers:[{type: mongoose.Types.ObjectId, ref: 'user'}],
    following:[{type: mongoose.Types.ObjectId, ref: 'user'}]

},{timestamps: true})


module.exports = mongoose.model('user',userSchema)