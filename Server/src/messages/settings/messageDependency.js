import MessageController from "../controller/messageController.js";
import MessageService from "../service/messageService.js";
import MessageModel from "../model/messageModel.js";
import MessageDatabase from "../database/messageDatabase.js";

export const messageDependency = () => {
    const externalDatabase = new MessageDatabase();
    const messageModel = new MessageModel(externalDatabase);
    const messageService = new MessageService(messageModel);
    const messageController = new MessageController(messageService);

    return {messageController};
}