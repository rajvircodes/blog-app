import mongoose  from "mongoose";
import isEmail from "validator/lib/isEmail";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:isEmail,
            message: props => `${props.value} is not a validate email address`
        }

    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    photo:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        select:false,
        minlength:8
    },
    role:{
        type:String,
        required:true,
        enum:['user', 'admin'],
    }
}, {timestamps:true})


export const User = mongoose.model('User', userSchema)