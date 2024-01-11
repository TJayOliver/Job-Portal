import { myCache, cacheTime } from '../../../configuration/cache.config.js'
import {id} from '../../../configuration/nanoid.config.js';

class ScholarshipService {

    constructor (scholarshipModel) {
        this.model = scholarshipModel;
    }

    async createScholarshipService ({
        scholarshipname, 
        deadline, 
        scholarshiptype, 
        featured, 
        programs, 
        country, 
        description, 
        scholarshipcategory,
        eligibility, 
        duration,
        programsoffered, 
        documentsrequired, 
        benefits, 
        applicationinformation, 
        agent, 
        hostuniversity,
        image
    }) {
        try {
            const scholarshipData = {
                id,
                scholarshipname, 
                deadline, 
                scholarshiptype, 
                featured, 
                programs, 
                country, 
                description, 
                scholarshipcategory,
                eligibility, 
                duration,
                programsoffered, 
                documentsrequired, 
                benefits, 
                applicationinformation, 
                agent, 
                hostuniversity,
                image
            }
            const scholarship = await this.model.createScholarshipModel(scholarshipData);
            return scholarship
        } catch (error) {
            console.error('service {create scholarship}:', error.message)
        }
    }

    async countScholarshipService () {
        try {
            const scholarshipCount = await this.model.countScholarshipModel();
            let count = "";
            scholarshipCount.map((newData)=>{
                const number = Object.values(newData);
                count += number;
            });
            return count;
        } catch (error) {
            console.error('service {count scholarship}:', error.message);
        }
    }

    async readAllScholarshipService () {
        const cacheKey = 'readallscholarships';
        try {
            const cachedData = myCache.get(cacheKey);
            if (cachedData) return cachedData;
            const scholarship = await this.model.readAllScholarshipModel();
            myCache.set(cacheKey, scholarship, cacheTime);
            return scholarship;
        } catch (error) {
            console.error('service {read all scholarship}:', error.message);
        }
    }

    async readScholarshipByCountryService (country) {
        const cacheKey = 'readscholarshipbycountry';
        try {
            const cachedData = myCache.get(cacheKey);
            if (cachedData) return cachedData;
            const scholarship = await this.model.readScholarshipByCountryModel(country);
            myCache.set(cacheKey, scholarship, cacheTime);
            return scholarship;
        } catch (error) {
            connsole.error('service {read scholarship by country}:', error.message);
        }
    }

    async readFeaturedScholarshipService (value) {
        const cacheKey = 'readFeaturedScholarship';
        try {
            const cachedData = myCache.get(cacheKey);
            if (cachedData) return cachedData;
            const scholarship = await this.model.readFeaturedScholarshipModel(value);
            myCache.set(cacheKey, scholarship, cacheTime);
            return scholarship;
        } catch (error) {
            console.error('service {read featured scholarship}:', error.message);
        }
    }

    async readScholarshipByCategoryService (scholarshipcategory) {
        const cacheKey = 'readScholarshipByCategory';
        try {
            const cachedData = myCache.get(cacheKey);
            if (cachedData) return cachedData;
            const scholarship = await this.model.readScholarshipByCategoryModel(scholarshipcategory);
            myCache.set(cacheKey, scholarship, cacheTime);
            return scholarship;
        } catch (error) {
            console.error('service {read scholarship by category}:', error.message);
        }
    }

    async readScholarshipByIDService (id) {
        const cacheKey = 'readScholarshipByID';
        try {
            const cachedData = myCache.get(cacheKey);
            if (cachedData) return cachedData;
            const scholarship = await this.model.readScholarshipByIDModel(id);
            myCache.set(cacheKey, scholarship, cacheTime);
            return scholarship;
        } catch (error) {
            console.error('service {read scholarship by id}:', error.message);
        }
    }

    async searchScholarshipByCountryService (country) {
        const cacheKey = 'readScholarshipByID';
        try {
            const cachedData = myCache.get(cacheKey);
            if (cachedData) return cachedData;
            const scholarship = await this.model.searchScholarshipByCountryModel(country);
            myCache.set(cacheKey, scholarship, cacheTime);
            return scholarship;
        } catch (error) {
            console.error('service {read scholarship by country}:', error.message);
        }
    }

    async editScholarshipService (id) {
        try {
            const scholarship = await this.model.editScholarshipModel(id);
            return scholarship;
        } catch (error) {
            console.error('service {edit scholarship}:', error.message);
        }
    }

    async updateScholarshipService ({
        id,
        scholarshipname, 
        deadline, 
        scholarshiptype,
        featured, 
        programs, 
        country, 
        description, 
        scholarshipcategory, 
        eligibility, 
        duration,
        programsoffered, 
        documentsrequired, 
        benefits, 
        applicationinformation,
        agent,
        hostuniversity,
        image}) {
        try {
            const scholarshipData = {
                id,
                scholarshipname, 
                deadline, 
                scholarshiptype,
                featured, 
                programs, 
                country, 
                description, 
                scholarshipcategory, 
                eligibility, 
                duration,
                programsoffered, 
                documentsrequired, 
                benefits, 
                applicationinformation,
                agent,
                hostuniversity,
                image
            }
            const scholarship = await this.model.updateScholarshipModel(scholarshipData);
            return scholarship;
        } catch (error) {
            console.error('service {update scholarship}:', error.message);
        }
    }

    async deleteScholarshipService (id) {
        try {
            const scholarship = await this.model.deleteScholarshipModel(id);
            return scholarship;
        } catch (error) {
            console.error('service {delete scholarship}:', error.message);
        }
    }
}

export default ScholarshipService;