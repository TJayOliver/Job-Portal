class JobModel {

    constructor (externalDatabase) {
        this.externalDatabase = externalDatabase;
    }

    async createJobModel (jobDetails) {
        try {
            const job = await this.externalDatabase.createJob(jobDetails);
            return job;
        } catch (error) {
            console.error('model {create job}:', jobDetails);
        }
    }

    async countJobModel () {
        try {
            const job = await this.externalDatabase.countJob();
            return job;
        } catch (error) {
            console.error('model {count job}:', error.message);
        }
    }

    async readAllJobsModel () {
        try {
            const job = await this.externalDatabase.readAllJobs();
            return job;
        } catch (error) {
            console.error('model {read all jobs}:', error.message);
        }
    }

    async readFeaturedJobModel (value) {
        try {
            const job = await this.externalDatabase.readFeaturedJob(value);
            return job;
        } catch (error) {
            console.error('model {read featured job}:', error.message);
        }
    }

    async readJobByCategoryModel (jobcategory) {
        try {
            const job = await this.externalDatabase.readJobByCategory(jobcategory);
            return job;
        } catch (error) {
            console.error('model {read job by category}:', error.message)
        }
    } 

    async readJobByIDModel (id) {
        try {
           const job = await this.externalDatabase.readJobByID(id);
           return job; 
        } catch (error) {
            console.error('model {read job by id}:', error.message);
        }
    }

    async searchJobModel (jobDetails) {
        try {
            const job = await this.externalDatabase.searchJob(jobDetails);
            return job;
        } catch (error) {
            console.error('model {search job}:', error.message);
        }
    }

    async editJobModel (id) {
        try {
            const job = await this.externalDatabase.editJob(id);
            return job;
        } catch (error) {
            console.error('model {edit job}:', jobDetails);
        }
    }    

    async updateJobModel (jobDetails) {
        try {
            const job = await this.externalDatabase.updateJob(jobDetails);
            return job;
        } catch (error) {
            console.error('model {update job}:', jobDetails);
        }
    }

    async deleteJobModel (id) {
        try {
            const job = await this.externalDatabase.deleteJob(id);
            return job;
        } catch (error) {
            console.error('model {delete job}:', jobDetails);
        }
    }
}

export default JobModel;