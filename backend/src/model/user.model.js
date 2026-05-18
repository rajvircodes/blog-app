import mongoose  from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:8
    },
    role:{
        type:String,
        required:true,
        enum:['user', 'admin'],
        default:'user'
    },
    // photo:{
    //     type:String,
    //     required:true

    // }
}, {timestamps:true})

    userSchema.pre('save', async function (next) {
        if(!this.isModified('password')) return next()

        try {
            this.password = await bcrypt.hash(this.password, 10)
        } catch (error) {
            console.log('ERROR:', error.message);
            
        }
    })


 const User = mongoose.model('User', userSchema)
 export default User