import SubscriberController from "../controller/subscriberController.js";
import SubscriberService from "../service/subscriberService.js";
import SubscriberModel from "../model/subscriberModel.js";
import SubscriberDatabase from "../database/subscriberDatabase.js";

export const subscriberDependencies = () =>{
    const externalDatabase = new SubscriberDatabase();
    const subscriberModel = new SubscriberModel(externalDatabase);
    const subscriberService = new SubscriberService(subscriberModel);
    const subscriberController = new SubscriberController(subscriberService);

    return {subscriberController};
}
