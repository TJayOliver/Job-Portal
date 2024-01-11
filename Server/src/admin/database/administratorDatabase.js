import {executeQuery} from '../../../configuration/mysql.config.js';

class AdministratorDatabase {

    async createAdmin (adminDetails) {
        try {
            const query = `INSERT INTO 
            administrator(id, name, username, password, image) 
            VALUES(?,?,?,?,?)`          
            const parameter = [
                adminDetails.id,
                adminDetails.name,
                adminDetails.username,
                adminDetails.password,
                adminDetails.image
            ];
            
            const admin = await executeQuery(query, parameter);
            return admin;
        } catch (error) {
            throw error;
        }
    }

    async getAdmin () {
        try {
            const query = `SELECT * FROM administrator`
            const admin = await executeQuery(query);
            return admin;
        } catch (error) {
            throw error;
        }
    }

    async getAdminByUsername (username) {
        try {
            const query = `SELECT id,username,name,password FROM administrator WHERE username=?`;
            const parameter = [username]
            const admin = await executeQuery(query, parameter);
            return admin;
        } catch (error) {
            throw error;
        }
    }

    async deleteAdmin (id) {
        try {
            const query = `DELETE FROM administrator WHERE id=?`;
            const parameter = [id];
            console.log(parameter)
            const admin = await executeQuery(query, parameter);
            return admin;
        } catch (error) {
            throw error;
        }
    }

    async signInAdmin (adminDetails) {
        try {
            
        } catch (error) {
            throw error;
        }
    }

    async signOutAdmin () {
        try {
            
        } catch (error) {
            
        }
    }
}

export default AdministratorDatabase;