import MessageModel from "../Models/MessageModel.js";

export const CreateMessageController = async (req,res)=>{
  try {
    const messages = new MessageModel({
        chatId:req.body.chatId,
        senderId:req.body.senderId,
        text:req.body.text
    });

    const message = await messages.save();
    res.status(200).json(message);

  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

export const GetMessageController = async (req,res) =>{
   try {
     const message = await MessageModel.find(req.params.chatId);
     res.status(200).json(message);
   } catch (error) {
    res.status(500).json({message:error.message})
   }
}