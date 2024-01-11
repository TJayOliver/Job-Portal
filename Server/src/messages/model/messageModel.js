class MessageModel {

    constructor (externalDatabase) {
        this.externalDatabase = externalDatabase;
    }

    async messageToAllSubscribersModel () {
        try {
            const message = await this.externalDatabase.messageToAllSubscribers();
            return message;
        } catch (error) {
            console.error('model {message to all subscribers}:', error.message)
        }
    }
};

export default MessageModel;