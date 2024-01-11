class MessageController {

    constructor (service) {
        this.service = service;
    }

    async messageToAllSubscribers (req, res) {
        try {
            const {subject, body} = req.body;
            const message = await this.service.messageToAllSubscribersService({subject, body});
            return res.status(201).json({message : 'Successfully Sent', message});
        } catch (error) {
            console.error('controller {message to all subscribers}:', error.message);
            return res.status(500).json({message : 'Internal Server Error'});
        }
    }
}

export default MessageController;