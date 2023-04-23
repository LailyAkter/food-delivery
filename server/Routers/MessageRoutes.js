import express from 'express';
import { CreateMessageController, GetMessageController } from '../Controllers/MessageController.js';

const router = express.Router();

router.post('/',CreateMessageController);
router.get('/:id',GetMessageController)

export default router;