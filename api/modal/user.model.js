import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
    },
    role:{
        type:String
    }
})