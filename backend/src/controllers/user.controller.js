import User from '../model/user.model.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // console.log(req.body);

        // 1.validate
        if(!name || !email || !password){
            return res.status(400).json({
                message:"All field required!"
            })
        }
        // 2.check existing
        const existingUser = await User.findOne({email})
            if(existingUser){
                return res.status(400).json({
                    message:"User already registered with this email"
                })
            }
            
            
            // 3. create user
            const user = await User.create({name, email, password});
            
            const token = jwt.sign({id: user.id},process.env.JWT_SECRET || '6f3abd43771ded04b78d9d77269677a3819cc3c9f8ce7f5966dbbaeeb624c1df',{expiresIn:"1d"})
            res.cookie('token', token)

        res.status(201).json({
            message:"User created",
            user:user
        })

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export {register}