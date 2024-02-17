import {executeQuery} from '../../../configuration/mysql.config.js';

class JobDatabase {
   
    async createJob (jobDetails) {
        try {
            const query = `INSERT INTO jobs
            (id,
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
            jobcategory)
            VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            const parameter = [jobDetails];
            const job = await executeQuery(query, parameter);
            return job;
        } catch (error) {
            throw error;
        }
    }

    async countJob () {
        try {
            const query = `SELECT COUNT(id) FROM jobs`;
            const job = await executeQuery(query);
            return job;
        } catch (error) {
            throw error;
        }
    }

    async readAllJobs () {  
        try {
            const query = `SELECT *, DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated FROM jobs`;
            const job = await executeQuery(query);
            return job;
        } catch (error) {
            throw error;
        }
    }

    async readFeaturedJob (value) {
        try {
            const query = `SELECT * FROM jobs WHERE featured=? LIMIT 4`;
            const parameter = [value];
            const job = await executeQuery(query, parameter);
            return job;
        } catch (error) {
            throw error;
        }
    }

    async readJobByCategory (jobcategory) {
        try {
            const query = `SELECT * FROM jobs WHERE jobcategory=?`;
            const parameter = [jobcategory];
            const job = await executeQuery(query, parameter);
            return job;
        } catch (error) {
            throw error;
        }
    }

    async readJobByID (id) {
        try {
            const query =  `SELECT *, 
            DATE_FORMAT(datecreated, '%d/%M/%Y') 
            AS datecreated 
            FROM jobs WHERE id=?`
            const parameter = [id];
            const job = await executeQuery(query, parameter);
            return job;
        } catch (error) {
            throw error;
        }
    }

    async searchJob (jobDetails) {
        const position = jobDetails.position;
        const location = jobDetails.location;
        const duration = jobDetails.duration;
        const jobcategory = jobDetails.jobcategory;
        try {
            if (position.length > 0 && location.length < 1 && duration.length < 1 && jobcategory.length < 1) {
                const query = `SELECT * FROM jobs WHERE position LIKE?`;
                const parameter = [`%${position}%`];
                const job = await executeQuery(query, parameter);
                return job;
            } 
            if (location.length > 0 && position.length < 1 && duration.length < 1 && jobcategory.length < 1) {
                const query = `SELECT * FROM jobs WHERE location LIKE?`;
                const parameter = [`%${location}%`];
                const job = await executeQuery(query, parameter);
                return job;
            }
            if (duration.length > 0 && location.length < 1 && position.length < 1 && jobcategory.length < 1) {
                const query = `SELECT * FROM jobs WHERE duration LIKE?`;
                const parameter = [`${duration}`];
                const job = await executeQuery(query, parameter);
                return job;
            }
            if (jobcategory.length > 0 && location.length < 1 && position.length < 1 && duration.length < 1) {
                const query = `SELECT * FROM jobs WHERE jobcategory LIKE?`;
                const parameter = [`${jobcategory}`];
                const job = await executeQuery(query, parameter);
                return job;
            }
            // search must match one
            // if (position.length > 0 || location.length > 0 || duration.length > 0 || jobcategory.length > 0) {
            //     const query = `SELECT * FROM jobs 
            //     WHERE position LIKE ? OR 
            //     location LIKE ? OR 
            //     duration LIKE ? OR 
            //     jobcategory LIKE ?`;
            //     const parameter = [`${position}`, `%${location}%`, `${duration}`, `${jobcategory}`];
            //     const job = await executeQuery(query, parameter);
            //     return job;
            // }
            //search must match all
            if (position.length > 0 && location.length > 0 && duration.length > 0 && jobcategory.length > 0) {
                const query = `SELECT * FROM jobs WHERE position LIKE? AND location LIKE? AND duration LIKE? AND jobcategory LIKE?`;
                const parameter = [`%${position}%`, `%${location}%`, , `${duration}`, `${jobcategory}`];
                const job = await executeQuery(query, parameter);
                return job;
            } 
        } catch (error) {
            throw error;
        }
    }

    async editJob (id) {
        try {
            const query = `SELECT * FROM jobs WHERE id=?`;
            const parameter = [id];
            const job = await executeQuery(query, parameter);
            return job;
        } catch (error) {
            throw error;
        }
    }

    async updateJob (jobDetails) {
        try {
            const query = `UPDATE jobs 
            SET
            image=?,
            company=?,
            salary=?,
            location=?,
            position=?,
            featured=?,
            website=?,
            duration=?,
            responsibility=?,
            requirements=?,
            otherinformation=?,
            jobcategory=?
            WHERE id=?`;
            const parameter = [
                jobDetails.image,
                jobDetails.company,
                jobDetails.salary,
                jobDetails.location,
                jobDetails.position,
                jobDetails.featured,
                jobDetails.website,
                jobDetails.duration,
                jobDetails.responsibility,
                jobDetails.requirements,
                jobDetails.otherinformation,
                jobDetails.jobcategory,
                jobDetails.id
            ];
            const job = await executeQuery(query, parameter);
            return job;
        } catch (error) {
            throw error;
        }
    }

    async deleteJob (id) {
        try {
            const query =  `DELETE FROM jobs WHERE id=?`;
            const parameter = [id];
            const job = await executeQuery(query, parameter);
            return job;
        } catch (error) {
            throw error;
        }
    }

}

export default JobDatabase;