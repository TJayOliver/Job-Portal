class AdministratorModel {

    constructor (externalDatabase) {
        this.externalDatabase = externalDatabase;
    }

    async createAdminModel (adminDetails) {
        try {
            const admin = await this.externalDatabase.createAdmin(adminDetails);
            return admin;
        } catch (error) {
            console.error('model:', error.message);
        }
    }

    async getAdminModel () {
        try {
           const admin = await this.externalDatabase.getAdmin();
           return admin; 
        } catch (error) {
            console.error('model:', error.message);
            throw error;
        }
    }

    async getAdminByUsernameModel (username) {
        try {
           const admin = await this.externalDatabase.getAdminByUsername(username);
           return admin; 
        } catch (error) {
            console.error('model:', error.message);
            throw error;
        }
    }

    async deleteAdminModel (id) {
        try {
            const admin = await this.externalDatabase.deleteAdmin(id);
            return admin;
        } catch (error) {
            console.error('model:', error.message);
            throw error;
        }
    }

    async signInAdminModel () {
        try {
            
        } catch (error) {
            console.error('model:', error.message);
            throw error;
        }
    }

    async signOutAdminModel () {
        try {
            
        } catch (error) {
            console.error('model:', error.message);
            throw error;
        }
    }
}

export default AdministratorModel;