import {sendMail} from '../../../mail/sendMail.js';
import {id} from '../../../configuration/nanoid.config.js';
import fs from 'fs'

const subscriptionMail =  'D:/Web/Projects/Job Portal/Server/mail/template/subscribeTemplate.html'
const subscribeMessage = fs.readFileSync(subscriptionMail);

class SubscriberService {

    constructor (subscriberModel) {
        this.model = subscriberModel;
    }

    async subscribeService (Email) {
        try { 
            if (!Email.includes('@')) {
                return {error:'Not a Valid Email Address'}
            }
            const checkEmail = await this.model.checkSubscriberModel(Email);
            if (checkEmail.length > 0) {
                return {error:'Already a Subscriber. Thank You'};
            } else {
                const email = Email;
                const subscriberDetails = [id, email]
                const subscriber = await this.model.subscribeModel(subscriberDetails);
                const receiverID = subscriberDetails[0];
                const receiverEmail = subscriberDetails[1]
                const unSubscribeLink = `<a href='http://localhost:5173/unsubscribe/${receiverID}'>Click to Unsubscribe</a>`
                const htmlContent = `${subscribeMessage} ${unSubscribeLink}`;
        
                await sendMail(
                    receiverEmail, 
                    'Empowering Your Journey: Exclusive Job Opportunities, Scholarships, and Career Guidance Await You!', 
                    htmlContent
                )
                return subscriber;
            }
        } catch (error) {
            console.error('service {subscribe}:', error.message);
        }
    }

    async getSubscriberService () {
        try {
            const subscriber = await this.model.getSubscriberModel();
            return subscriber;
        } catch (error) {
            console.error('service {get subscriber}:', error.message);
        }
    }

    async unSubscribeService (id) {
        try {
            const subscriber = await this.model.unSubscribeModel(id);
            return subscriber;
        } catch (error) {
            console.error('service {unsubscribe}:', error.message);
        }
    }

    async notifySubscribersService ({subject, message}) {
        try {
            const receipients = await this.model.getSubscriberModel();
            await sendMail(
                receipients,
                subject,
                message
            )
            const subscriber = await this.model.notifySubscribersModel({id, subject, message});
            return subscriber;
        } catch (error) {
            console.error('service {notifySubscribers}:', error.message);
            res.status(500).json({message:'Internal Server Error'});
        }
    }

}

export default SubscriberService;