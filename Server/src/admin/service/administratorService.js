import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {id} from '../../../configuration/nanoid.config.js';

class AdministratorService {

    constructor (adminModel) {
        this.model = adminModel;
    }

    async createAdminService ({name,username,password,image}) {
        const saltRounds = 10;
        try {
            const passwordHash = await bcrypt.hash(password, saltRounds);
            const adminDetails = {
                id,
                name,
                username,
                password : passwordHash,
                image
            }
            const admin = await this.model.createAdminModel(adminDetails);
            return admin;
        } catch (error) {
            console.error('service:', error.message);
        }
    }

    async getAdminService () {
        try {
            const admin = await this.model.getAdminModel();
            return admin;
        } catch (error) {
            console.error('service:', error.message);
        }
    }

    async deleteAdminService (id) {
        try {
            const admin = await this.model.deleteAdminModel(id);
            return admin;
        } catch (error) {
            console.error('service:', error.message);
        }
    }

    async signInAdminService ({username, password}) {
        try {
            const checkAdminUsername = await this.model.getAdminByUsernameModel(username);
            const user = checkAdminUsername[0];
            if (!user.username) return {error : 'Incorrect Username or Password'};
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) return {error : 'Incorrect Username or Password'};
            const token = jwt.sign({ userID : user.id, username : user.name }, process.env.JWTSECRETKEY, { expiresIn : '1h' });
            return {token};
        } catch (error) {
            console.error('service:', error.message);
        }
    }

    async signOutAdminService (header) {
        try {
            const logout = jwt.sign(header, '', {expiresIn : 1});
            if (logout) return {message : 'Logged Out'};
            return {error : 'Error'}
        } catch (error) {
            console.error('service:', error.message);
        }
    }
}

export default AdministratorService;