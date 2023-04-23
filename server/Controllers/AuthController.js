import UserModel from '../Models/UserModel.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils.js';

export const registerController = async(req,res) => {
    try {
        // password hashed
        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(req.body.password,salt)
        req.body.password = hashed_password;
        // password hashed

        const createUser = new UserModel(req.body);
        const {email} = createUser;

        // old user check
        const oldUser = await UserModel.findOne({email:email});
        if(oldUser){
            res.status(400).send({ message: 'User is already exists.' })
        }
        // old user check

        let user = await createUser.save();
        
        // const {password , ...user} = createUser;

        const token = generateToken(user);
        // console.log(user,token)

        res.status(200).json({user,token});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const loginController = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await UserModel.findOne({email:email});
        if(user){
            // compare password 
            const validity = await bcrypt.compare(password,user.password)
            // compare password

            if(!validity){
                res.status(403).json("Invalid Password & Email")
            }else{
                const token = generateToken(user);
                res.status(200).json({user,token})
            }
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}