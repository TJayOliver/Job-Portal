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

const internshipStorage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null,'uploads/internship');
    },
    filename : (req, file, cb) =>{
        cb(null, date() + '-' + 'internship' + '-' + file.originalname)
    }
});

const graduatejobStorage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null,'uploads/graduatejob');
    },
    filename : (req, file, cb) =>{
        cb(null, date() + '-' + 'job' + '-' + file.originalname)
    }
});

export const articleUpload = multer({storage : articleStorage});
export const scholarshipUpload = multer({storage : scholarshipStorage});
export const internshipUpload = multer({storage : internshipStorage});
export const graduateUpload = multer({storage : graduatejobStorage});

