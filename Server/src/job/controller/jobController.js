class JobController {

    constructor (service) {
        this.service = service;
    }

    async createJob (req, res) {
        try {
            const {
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
            } = req.body;
            const image = req.file.filename;
            const jobDetails = {
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
            const job = await this.service.createJobService(jobDetails);
            return res.status(201).json({message : 'Successfully Created', data : job})
        } catch (error) {
            console.error('controller {create job}:', error.message);
            res.status(500).json({message: 'Internal Server Error'});
        }
    }

    async countJob (req, res) {
        try {
            const job = await this.service.countJobService();
            return res.status(200).json({ data : job});
        } catch (error) {
            console.error('controller {count job}:', error.message);
            return res.status(500).json({message : 'Internal Server Error'});
        }
    }

    async readAllJobs (req, res) {
        try {
            const job = await this.service.readAllJobsService();
            return res.status(201).json({message:'Successfully Retrieved', data : job});
        } catch (error) {
            console.error('controller {read all jobs}:', error.message);
            return res.status(500).json({messge:'Internal Server Error'});
        }
    }

    async readFeaturedJob (req, res) {
        try {
            const value = 'true';
            const job = await this.service.readFeaturedJobService(value);
            return res.status(201).json({message : 'Successfully Retrieved', data : job});
        } catch (error) {
            console.error('controller {read featured job}:', error.message);
            return res.status(500).json({message : 'Internal Server Error'});
        }
    }

    async readJobByCategory (req, res) {
        try {
            const { jobcategory } = req.params;
            const job = await this.service.readJobByCategoryService(jobcategory);
            return res.status(201).json({message : 'Successfully Retrieved', data : job});
        } catch (error) {
            console.error('controller {read job by category}:', error.message);
            return res.status(500).json({message : 'Internal Server Error'});
        }
    }

    async readJobByID (req, res) {
        try {
            const {id} = req.params;
            const job = await this.service.readJobByIDService(id);
            return res.status(200).json({message : 'Successfully retrieved', data : job}); 
        } catch (error) {
            console.error('service {read job by id}:', error.message);
        }
    }

    async searchJob (req, res) {
        try {
            const { position, location, jobcategory, duration } = req.body; 
            const jobDetails = {
                position,
                location,
                jobcategory,
                duration
            };
            const job = await this.service.searchJobService(jobDetails);
            return res.status(201).json({message : 'Successfully Retrieved', data : job})
        } catch (error) {
            console.error('controller {search job}:', error.message);
            return res.status(500).json({message:'Internal Server Error'})
        }
    }

    async editJob (req, res) {
        try {
            const {id} = req.params;
            const job = await this.service.editJobService(id);
            return res.status(200).json({message : 'Successfully Update', data : job});
        } catch (error) {
            console.error('controller {edit job}:', error.message);
            res.status(500).json({message: 'Internal Server Error'});
        }
    }

    async updateJob (req, res) {
        try {
            const {id} = req.params;
            const {
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
            } = req.body;
            const image = req.file.filename;
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
            const job = await this.service.updateJobService(jobDetails);
            return res.status(201).json({message : 'Successfully Updated', data : job});
        } catch (error) {
            console.error('controller {update job}:', error.message);
            res.status(500).json({message: 'Internal Server Error'});
        }
    }

    async deleteJob (req, res) {
        try {
            const {id} = req.params;
            const job = await this.service.deleteJobService(id);
            return res.status(201).json({message : 'Successfully Deleted', data : job});
        } catch (error) {
            console.error('controller {delete}:', error.message);
            res.status(500).json({message: 'Internal Server Error'});
        }
    }

}

export default JobController;