import express from 'express';
import { messageDependency } from '../settings/messageDependency.js';

const messageRouter = express.Router();
const { messageController } = messageDependency();

messageRouter.post('/message/send', 
    async (req, res) => messageController.messageToAllSubscribers(req, res)
);


export default messageRouter;