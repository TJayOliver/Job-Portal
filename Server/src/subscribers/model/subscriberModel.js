class SubscriberModel {

    constructor (externalDatabase) {
        this.externalDatabase = externalDatabase;
    }

    async subscribeModel (subscriberDetails) {
        try {
            const subscriber = await this.externalDatabase.subscribe(subscriberDetails);
            return subscriber;
        } catch (error) {
            console.error('model {subscribe}:', error.message);
        }
    }

    async getSubscriberModel () {
        try {
            const subscriber = await this.externalDatabase.getSubscriber();
            return subscriber;
        } catch (error) {
            console.error('model {get subscriber}:', error.message);
        }
    }

    async checkSubscriberModel (email) {
        try {
            const subscriber = await this.externalDatabase.checkSubscriber(email);
            return subscriber;
        } catch (error) {
            console.error('model {subscriber}:', error.message);
        }
    }

    async unSubscribeModel (id) {
        try {
            const subscriber = await this.externalDatabase.unSubscribe(id);
            return subscriber;
        } catch (error) {
            console.error('model {unsubscribe}:', error.message);
        }
    }

    async notifySubscribersModel ({subject, message}) {
        try {
            const subscriber = await this.externalDatabase.notifySubscribers({subject, message});
            return subscriber;
        } catch (error) {
            console.error('model {notify subscriber}:', error.message);
        }
    }

}

export default SubscriberModel;