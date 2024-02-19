import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

//1. post req @ /send/id
//2. protectRoute func. triggered - If successful next() funct triggered
//3. last sendMessage funct triggered if all successful
router.get('/send/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);

export default router;
