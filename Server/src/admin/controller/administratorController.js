class AdministratorController {

    constructor (adminService) {
        this.service = adminService;
    }

    async createAdmin (req, res) {
        try {
            const {name, username, password,image} = req.body;
            //const image = req.file.filename;
            const adminDetails = {
                name,
                username,
                password,
                image
            }
            const admin = await this.service.createAdminService(adminDetails);
            return res.status(201).json({message:'Successfully Created', admin});
        } catch (error) {
            console.error('controller:', error.message);
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async getAdmin (req, res) {
        try {
            const headers = req.headers["authorization"];
            const admin = await this.service.getAdminService();
            return res.status(201).json({message:'Successfully Retrieved', admin});
        } catch (error) {
            console.error('controller:', error.message);
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async deleteAdmin (req, res) {
        try {
            const {id} = req.params;
            const admin = await this.service.deleteAdminService(id);
            return res.status(201).json({message:'Successfully Deleted', admin});
        } catch (error) {
            console.error('controller:', error.message);
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async signInAdmin (req, res) {
        try {
            const { username, password } = req.body;
            const adminDetails = { username, password };
            const admin = await this.service.signInAdminService(adminDetails);
            if (admin.error) return res.status(400).json({ message : admin.error });
            res.cookie('token', admin.token) 
            return res.status(201).json({message : 'Successfully Signed In', token : admin.token}); 
        } catch (error) {
            console.error('controller:', error.message);
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async signOutAdmin (req, res) {
        try {
            const header = req.headers['authorization'];
            const admin = await this.service.signOutAdminService(header);
            if (admin.error) return res.status(401).json({message : admin.error});
            return res.status(201).json(admin);
        } catch (error) {
            console.error('controller:', error.message);
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async dashboard (req, res) {
        try {
            res.json({status : 'Success', username : req.username})
        } catch (error) {
            console.error('dashboard', error.message)
        }
    }
}

export default AdministratorController;