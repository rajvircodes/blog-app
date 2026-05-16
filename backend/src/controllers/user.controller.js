import User from '../model/user.model.js'
import bcrypt from 'bcrypt'

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
        const salt = bcrypt.genSalt(12)
        const hashed = bcrypt.hash(password, salt)

        // 3. create user
        const user = await User.create({name, email, password:hashed});
        res.status(201).json({
            message:"User created",
            user:user
        })

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export {register}