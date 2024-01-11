import { executeQuery } from '../../../configuration/mysql.config.js';

class MessageDatabase {
    async messageToAllSubscribers () {
        try {
            const query = `SELECT email FROM subscribe`;
            const message = await executeQuery(query);
            return message;
        } catch (error) {
            throw error;
        }
    }
};

export default MessageDatabase;