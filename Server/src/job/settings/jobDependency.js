import JobController from "../controller/jobController.js";
import JobModel from "../model/jobModel.js";
import JobService from "../service/jobService.js";
import JobDatabase from "../database/jobDatabase.js";

export const jobDependency = () => {
    const externalDatabase = new JobDatabase();
    const jobModel = new JobModel(externalDatabase);
    const jobService = new JobService(jobModel);
    const jobController = new JobController(jobService);
    
    return {jobController};
}


