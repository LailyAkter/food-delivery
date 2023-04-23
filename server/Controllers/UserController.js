import UserModel from '../Models/UserModel.js';

export const getUserController = async(req,res)=>{
    const user = await UserModel.findOne({email:req.body.email});

    res.status(200).json({user})
}