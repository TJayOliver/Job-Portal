import {executeQuery} from '../../../configuration/mysql.config.js';

class SubscriberDatabase {

    async subscribe (subsciberDetails) {
        try {
            const query = `INSERT INTO subscribe (id, email) VALUES (?, ?)`;
            const parameter = subsciberDetails;
            const subscriber =  await executeQuery(query, parameter);
            return subscriber;
        } catch (error) {
            throw error;
        }
    }

    async getSubscriber () {
        try {
            const query = `SELECT * FROM subscribe`;
            const subscriber = await executeQuery(query);
            return subscriber;
        } catch (error) {
            throw error;
        }
    }

    async checkSubscriber (email) {
        try {
            const query = `SELECT * FROM subscribe WHERE email=?`;
            const parameter = [email];
            const subscriber = await executeQuery(query, parameter);
            return subscriber;
        } catch (error) {
            throw error;
        }
    }

    async unSubscribe (id) {
        try {
            const query = `DELETE FROM subscribe WHERE id=?`
            const parameter = [id];
            const subscriber = await executeQuery(query, parameter);
            return subscriber;
        } catch (error) {
            throw error;
        }
    }

    async notifySubscribers ({id, subject, message}) {
        try {
            const query = `INSERT INTO mailmessages VALUES(id, subject, message)`;
            const parameter = [id, subject, message];
            const subscriber = await executeQuery(query, parameter);
            return subscriber;
        } catch (error) {
            throw error;
        }
    }
}

export default SubscriberDatabase;