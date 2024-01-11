class ScholarshipModel {

    constructor (externalDatabase) {
        this.externalDatabase = externalDatabase;
    }

    async createScholarshipModel (scholarshipData) {
        try {
            const scholarship = await this.externalDatabase.createScholarship(scholarshipData);
            return scholarship;
        } catch (error) {
            console.error('model {create scholarship}:', error.message)
        }
    }

    async countScholarshipModel () {
        try {
            const scholarship = await this.externalDatabase.countScholarship();
            return scholarship;
        } catch (error) {
            console.error('model {count scholarship}:', error.message);
        }
    }

    async readAllScholarshipModel () {
        try {
            const scholarship = await this.externalDatabase.readScholarship();
            return scholarship;
        } catch (error) {
            console.error('model {read all scholarship}:', error.message);
        }
    }

    async readScholarshipByCountryModel (country) {
        try {
            const scholarship = await this.externalDatabase.readScholarshipByCountry(country);
            return scholarship;
        } catch (error) {
            console.error('model {read scholarship by country}:', error.message);
        }
    }

    async readFeaturedScholarshipModel (value) {
        try {
            const scholarship = await this.externalDatabase.readFeaturedScholarship(value);
            return scholarship;
        } catch (error) {
            console.error('model {read featured scholarship}:', error.message);
        }
    }

    async readScholarshipByCategoryModel (scholarshipcategory) {
        try {
            const scholarship = await this.externalDatabase.readScholarshipByCategory(scholarshipcategory);
            return scholarship;
        } catch (error) {
            console.error('model {read scholarship by category}:', error.message);
        }
    }

    async readScholarshipByIDModel (id) {
        try {
            const scholarship = await this.externalDatabase.readScholarshipByID(id);
            return scholarship;
        } catch (error) {
            console.error('model {read scholarship by id}:', error.message);
        }
    }

    async searchScholarshipByCountryModel (countryname) {
        try {
            const scholarship = await this.externalDatabase.searchScholarshpByCountry(countryname);
            return scholarship;
        } catch (error) {
            console.error('model {}:', error.message);
        }
    }

    async editScholarshipModel (id) {
        try {
            const scholarship = await this.externalDatabase.editScholarship(id);
            return scholarship;
        } catch (error) {
            console.error('model {edit scholarship}', error.message)
        }
    }

    async updateScholarshipModel (scholarshipData) {
        try {
            const scholarship = await this.externalDatabase.updateScholarship(scholarshipData);
            return scholarship;
        } catch (error) {
            console.error('model {update scholarship}:', error.message);
        }
    }

    async deleteScholarshipModel (id) {
        try {
            const scholarship = await this.externalDatabase.deleteScholarship(id);
            return scholarship;
        } catch (error) {
            console.error('model {delete scholarship}:', error.message);
        }
    }
}

export default ScholarshipModel;