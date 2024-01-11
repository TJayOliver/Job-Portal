import express from 'express';
import { subscriberDependencies } from '../settings/subscriberDependency.js';

const {subscriberController} = subscriberDependencies();


const subscriberRouter = express.Router();

subscriberRouter.get('/subscriber', 
    async (req, res) => subscriberController.getSubcriber(req, res)
);

subscriberRouter.post('/subscribe', 
    async (req, res) => subscriberController.subscribe(req, res)
);

subscriberRouter.delete('/unsubscribe/:id', 
    async (req, res) => subscriberController.unSubscribe(req, res)
);


export default subscriberRouter;
