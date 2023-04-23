import ChatModel from "../Models/ChatModel.js";

export const CreateChat = async(req,res)=>{
    try {
        const newChat = new ChatModel({
            members:[req.body.senderId,req.body.receiverId]
        })
        const chat = await newChat.save();

        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const GetUserChat = async(req,res)=>{
    try {
        const user = await ChatModel.find({
            members: {$in:[req.params.userId]}
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

export const GetChat = async(req,res)=>{
    try {
        const chat = await ChatModel.findOne({
            members:{$all:[req.params.senderId,req.params.receiverId]}
        });
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}