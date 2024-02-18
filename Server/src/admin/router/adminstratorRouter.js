import express from 'express';
import { upload } from '../../../configuration/multer.js'
import { administratorDependencies } from '../settings/administratorDependency.js';
import { verifyToken } from '../../../configuration/verifyToken.js';

const {administratorController}  = administratorDependencies();

const administratorRouter = express.Router();

administratorRouter.get('/admin', verifyToken,
    async (req,res) => administratorController.getAdmin(req, res)
);

administratorRouter.post('/admin/signin',
    async (req, res) => administratorController.signInAdmin(req, res)
);

administratorRouter.get('/admin/signout',
    async (req, res) => administratorController.signOutAdmin(req, res)
);

administratorRouter.post('/admin/create', 
    //upload.single('image'),
    async (req,res) => administratorController.createAdmin(req, res)
);

administratorRouter.delete('/admin/delete/:id',
    async (req,res) => administratorController.deleteAdmin(req, res)
);

administratorRouter.get('/admin/dashboard', verifyToken,
    async (req,res) => administratorController.dashboard(req, res)
);
export default administratorRouter;