import express from 'express';
import { CreateChat, GetChat, GetUserChat } from '../Controllers/ChatController.js';

const router = express.Router();

router.post('/',CreateChat);

router.get('/:userId',GetUserChat);

router.get('/:senderId/:receiverId',GetChat)

export default router;