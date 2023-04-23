import express from 'express';
import { getUserController } from "../Controllers/UserController.js";

const router = express.Router();

router.get('/user',getUserController)

export default router;