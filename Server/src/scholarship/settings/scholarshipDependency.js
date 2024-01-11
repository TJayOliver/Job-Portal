import ScholarshipController from "../controller/scholarshipController.js";
import ScholarshipService from "../service/scholarshipService.js";
import ScholarshipModel from "../model/scholarshipModel.js";
import ScholarshipDatabase from "../database/scholarshipDatabase.js";

export const scholarshipDependency = () => {
    const externalDatabase = new ScholarshipDatabase();
    const scholarshipModel = new ScholarshipModel(externalDatabase);
    const scholarshipService = new ScholarshipService(scholarshipModel);
    const scholarshipController = new ScholarshipController(scholarshipService);
    
    return {scholarshipController};
}


