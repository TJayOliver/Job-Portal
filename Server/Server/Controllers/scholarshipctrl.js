import {database} from '../Database/database.js';
import {v4 as uuid} from 'uuid';

export const ScholarshipGet = async(req,res) =>{
    const query = `SELECT *,
    DATE_FORMAT(deadline, '%d/%m/%Y') AS deadline, 
    DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated
    FROM scholarships`
    try{
        console.log('connected to database for scholarship get request')
        const [data] = await database.query(query)
        console.log('scholarship get data retrieved')

        const newData = await Promise.all(data.map(async(dat)=>{
            const imageBuffer = await database.query('SELECT image FROM scholarships WHERE id=?', [dat.id]);
            return{...dat, image:imageBuffer[0][0].image.toString('base64')}
        }));

        res.json(newData)
    }
    catch(error){
        console.log(error)
    }
};

export const ScholarshipCount = async(req, res) =>{
    const query = `SELECT COUNT (id) FROM scholarships`
    try{
        console.log('scholarships counting successfull')
        const [data] = await database.query(query);
        let count = "";
        data.map((newData)=>{
            const c = Object.values(newData);
            count += c;
        })
        return res.send(count);
    }catch(error){
        console.error(error)
    }
}

export const ScholarshipPost = async(req,res)=>{
    const {scholarshipname, deadline, scholarshiptype, agent, programs, applicant,hostuniversity, offeredby, aboutscholarship,scholarshipbenefits, eligibilitycriteria, documentsrequired, country, apply, duration} = req.body;
    const image = req.file.buffer;

    const query = `INSERT INTO scholarships  
    (id, image, scholarshipname, deadline, scholarshiptype, agent, programs, applicant,hostuniversity, offeredby, aboutscholarship,scholarshipbenefits, eligibilitycriteria, documentsrequired, country, apply, duration) 
    VALUES (?,?, ?, ?, ?, ?, ?, ?,?, ?, ?,?, ?, ?, ?, ?, ?)`;
    const parameter = [uuid(), image,scholarshipname, deadline, scholarshiptype, agent, programs, applicant,hostuniversity, offeredby, aboutscholarship,scholarshipbenefits, eligibilitycriteria, documentsrequired, country, apply, duration]

    try{
        console.log('connected to database for scholarship post request')
        const [data] = await database.query(query, parameter)
        console.log('scholarship post data retrieved by MYSQL')
    }catch(error){
        console.log(error)
    }
}

export const ScholarshipDelete = async(req,res) =>{
    const {id} = req.params;
    const query = `DELETE FROM scholarships WHERE id=?`;
    const parameter = [id];
    try {
        const [data] = await database.query(query, parameter);
        console.log('deleted');
        return res.json('Successfully Deleted');
    } catch (error) {
        console.error(error)
    }
}

// loads the scholarships post page
export const ScholarshipEdit = async(req, res) =>{
    const query =  `SELECT * FROM scholarships WHERE id=?`
    const parameter = [req.params.id]
    try{
        const [data] = await database.query(query, parameter)
        res.send(data)
    }catch(error){
        console.error(error.message)
    }
}

// posts the newly updated scholarships
export const ScholarshipsUpdate = async(req,res) =>{
    const {scholarshipname, deadline, scholarshiptype, agent, programs, applicant,hostuniversity, offeredby, aboutscholarship,scholarshipbenefits, eligibilitycriteria, documentsrequired, country, apply, duration} = req.body;

    const image = req.file.buffer;
    
    const query = "UPDATE image, scholarships SET scholarshipname=?, deadline=?, scholarshiptype=?, agent=?, programs=?, applicant=?,hostuniversity=?, offeredby=?, aboutscholarship=?,scholarshipbenefits=?, eligibilitycriteria=?, documentsrequired=?, country=?, apply=?, duration=? WHERE id=?"

    const parameter = [image, scholarshipname, deadline, scholarshiptype, agent, programs, applicant,hostuniversity, offeredby, aboutscholarship,scholarshipbenefits, eligibilitycriteria, documentsrequired, country, apply, duration, req.params.id];
    try {
        const [data] = await database.query(query, parameter);
        console.log(data)
        return res.json('Successfully Updated')
    } catch (error) {
        console.error(error.message)
    }
}