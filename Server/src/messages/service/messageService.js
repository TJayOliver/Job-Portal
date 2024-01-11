import { sendMail } from '../../../mail/sendMail.js'

class MessageService {

    constructor (model) {
        this.model = model;
    }

    async messageToAllSubscribersService ({subject, body}) {
        try {
            const clientEmail = await this.model.messageToAllSubscribersModel();
            clientEmail.forEach( async (element) => {
                const email = element.email;
                await sendMail(email, subject, body);
            });
            return {message : 'Message Successfully Sent'};
        } catch (error) {
            console.error('service {message to all subscribers}:', error.message);
        }
    }
};

export default MessageService;