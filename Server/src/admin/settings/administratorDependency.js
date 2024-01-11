import AdministratorController from "../controller/administratorController.js";
import AdministratorService from "../service/administratorService.js";
import AdministratorModel from "../model/administratorModel.js";
import AdministratorDatabase from "../database/administratorDatabase.js";

export const administratorDependencies = () => {
    const externalDatabase = new AdministratorDatabase();
    const administratorModel = new AdministratorModel(externalDatabase);
    const administratorService = new AdministratorService(administratorModel);
    const administratorController = new AdministratorController(administratorService);

    return {administratorController};
}

