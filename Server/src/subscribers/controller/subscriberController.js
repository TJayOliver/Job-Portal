class SubscriberController {

    constructor (subscriberService) {
        this.service = subscriberService;
    }

    async subscribe (req, res) {
        try {
            const {email} = req.body;
            const Email = email.trim();
            const subscriber = await this.service.subscribeService(Email);
            return res.status(201).json(subscriber.error ? {message:subscriber.error} : {message:'Successfully Subscribed'});
        } catch (error) {
            console.error('controller {subcribe}:', error.message);
            res.status(500).json({message : 'Internal Server Error'});
        }
    }

    async getSubcriber (req, res) {
        try {
            const subscriber = await this.service.getSubscriberService();
            return res.status(201).json({message:'Successfully Retrieved', subscriber}); 
        } catch (error) {
            console.error('controller {get subscriber}:', error.message)
            res.status(500).json({message : 'Internal Server Error'})
        }
    }

    async unSubscribe (req, res) {
        try {
            const {id} = req.params;
            const subscriber = await this.service.unSubscribeService(id);
            return res.status(201).json({message:'Successfully Unsubscribed', subscriber});
        } catch (error) {
            console.error('controller {unsubscribe}:', error.message);
            res.status(500).json({message:'Internal Server Error'});
        }
    }
}

export default SubscriberController;