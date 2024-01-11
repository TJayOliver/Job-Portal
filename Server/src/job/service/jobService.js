import {myCache, cacheTime} from '../../../configuration/cache.config.js';
import {id} from '../../../configuration/nanoid.config.js';

class JobService {

    constructor (model) {
        this.model = model;
    }

    async createJobService ({
        image,
        company,
        salary,
        location,
        position,
        featured,
        website,
        duration,
        responsibility,
        requirements,
        otherinformation,
        jobcategory}) {
        try {
            const jobDetails = {
                id,
                image,
                company,
                salary,
                location,
                position,
                featured,
                website,
                duration,
                responsibility,
                requirements,
                otherinformation,
                jobcategory
            }
            const job = await this.model.createJobModel(jobDetails);
            return job;
        } catch (error) {
            console.error('service {create job}:', error.message);
        }
    }

    async countJobService () {
        try {
            let job = "";
            const jobs = await this.model.countJobModel();
            jobs.map((newData)=>{
                const counter = Object.values(newData);
                job += counter;
            });
            return job;
        } catch (error) {
            console.error('model {count job}:', error.message);
        }
    }

    async readAllJobsService () {
        const cacheKey = 'readAllJobsModel'
        try {
            const cachedData = myCache.get(cacheKey);
            if (cachedData) return cachedData;
            const job = await this.model.readAllJobsModel();
            myCache.set(cacheKey, job, cacheTime);
            return job;
        } catch (error) {
            console.error('service {read all jobs}:', error.message);
        }
    }

    async readFeaturedJobService (value) {
        const cacheKey = 'readFeaturedJob';
        try {
            const cachedData = myCache.get(cacheKey);
            if (cachedData) return cachedData;
            const job = await this.model.readFeaturedJobModel(value);
            myCache.set(cacheKey, job, cacheTime);
            return job;
        } catch (error) {
            console.error('service {read featured job}:', error.message);
        }
    }

    async readJobByCategoryService (jobcategory) {
        const cacheKey = 'readJobByCategory';
        try {
            const cachedData = myCache.get(cacheKey);
            if (cachedData) return cachedData;
            const job = await this.model.readJobByCategoryModel(jobcategory);
            myCache.set(cacheKey, job, cacheTime);
            return job;
        } catch (error) {
            console.error('service {read job by category}:', error.message)
        }
    }

    async readJobByIDService (id) {
        try {
           const job = await this.model.readJobByIDModel(id);
           return job; 
        } catch (error) {
            console.error('service {read job by id}:', error.message);
        }
    }

    async searchJobService ({position, location}) {
        try {
            await position.trim();
            await location.trim();
            const jobDetails = {
                position,
                location
            };
            const job = await this.model.searchJobModel(jobDetails);
            return job;
        } catch (error) {
            console.error('service {search job}:', error.message)
        }
    }

    async editJobService (id) {
        try {
            const job = await this.model.editJobModel(id);
            return job;
        } catch (error) {
            console.error('service {edit job}:', error.message);
        }
    }

    async updateJobService ({
        id,
        image,
        company,
        salary,
        location,
        position,
        featured,
        website,
        duration,
        responsibility,
        requirements,
        otherinformation,
        jobcategory}) {
            try {
                const jobDetails = {
                    id,
                    image,
                    company,
                    salary,
                    location,
                    position,
                    featured,
                    website,
                    duration,
                    responsibility,
                    requirements,
                    otherinformation,
                    jobcategory
                }
                const job = await this.model.updateJobModel(jobDetails)
                return job;
            } catch (error) {
                console.error('service {update job}:', error.message);
            }
    }

    async deleteJobService (id) {
        try {
            const job = await this.model.deleteJobModel(id);
            return job;
        } catch (error) {
            console.error('service {delete job}:', error.message);
        }
    }
}

export default JobService;