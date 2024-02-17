import multer from 'multer';
import { nanoid } from 'nanoid';
const uuid = nanoid(6);


const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null,'upload');
    },
    filename : (req, file, cb) =>{
        cb(null, uuid + '-' + file.originalname)
    }
});

export const upload = multer({storage : storage});