import multer from 'multer';

export const date = () =>{
    const today = new Date(), 
    day = today.getDate(), 
    month = Number(today.getMonth().toString()) + 1, 
    year = today.getFullYear().toString();
    const current = year + "-" + month + "-" + day;
    return current;
};

const articleStorage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null,'uploads/article/');
    },
    filename : (req, file, cb) =>{
        cb(null, date() + '-' + 'article' + '-' + file.originalname)
    }
});

const scholarshipStorage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null,'uploads/scholarship/');
    },
    filename : (req, file, cb) =>{
        cb(null, date() +'-' + 'scholarship' + '-' + file.originalname)
    }
});

const jobStorage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null,'uploads/job');
    },
    filename : (req, file, cb) =>{
        cb(null, date() + '-' + 'job' + '-' + file.originalname)
    }
});

export const articleUpload = multer({storage : articleStorage});
export const scholarshipUpload = multer({storage : scholarshipStorage});
export const jobsUpload = multer({storage : jobStorage});

