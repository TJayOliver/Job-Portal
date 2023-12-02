import {database} from '../Database/database.js';
import {v4 as uuid} from 'uuid';

export const ScholarshipGet = async(req,res) =>{
    const query = `SELECT *,
    DATE_FORMAT(deadline, '%d/%m/%Y') AS deadline, 
    DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated
    FROM scholarships`
    try{
        const [data] = await database.query(query)
        res.json(data)
    } 
    catch(error){
        console.error(error.message)
    }
};

export const ScholarshipFeatured = async(req,res) =>{
    const query = `SELECT *, DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated FROM scholarships WHERE featured=? LIMIT 8`;
    const parameter = ['true']
    try{
        const [data] = await database.query(query, parameter);
        res.json(data);
    }catch(error){
        console.error(error.message);
    }
}

export const ScholarshipSearch = async(req, res) =>{
    const {country} = req.body;
    try{
        const query = `SELECT * FROM scholarships WHERE country LIKE?`
        const parameters = [`%${country}%`]
        const [data] = await database.query(query, parameters);
        res.json(data)
    }catch(error){
        console.error(error.message)
    }
}

export const ScholarshipCount = async(req, res) =>{
    const query = `SELECT COUNT (id) FROM scholarships`
    try{
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
    const {scholarshipname, deadline, scholarshiptype, featured, agent, programs, applicant,hostuniversity, offeredby, aboutscholarship,scholarshipbenefits, eligibilitycriteria, documentsrequired, country, apply, duration} = req.body;
    const image = req.file.filename;

    const query = `INSERT INTO scholarships  
    (id, image, scholarshipname, deadline, scholarshiptype,featured, agent, programs, applicant,hostuniversity, offeredby, aboutscholarship,scholarshipbenefits, eligibilitycriteria, documentsrequired, country, apply, duration) 
    VALUES (?,?, ?, ?, ?, ?, ?, ?,?, ?, ?,?, ?, ?, ?, ?, ?, ?)`;
    const parameter = [uuid(), image,scholarshipname, deadline, scholarshiptype, featured, agent, programs, applicant,hostuniversity, offeredby, aboutscholarship,scholarshipbenefits, eligibilitycriteria, documentsrequired, country, apply, duration]

    try{
        const [data] = await database.query(query, parameter)
    }catch(error){
        console.error(error.message)
    }
}

export const ScholarshipDelete = async(req,res) =>{
    const {id} = req.params;
    const query = `DELETE FROM scholarships WHERE id=?`;
    const parameter = [id];
    try {
        const [data] = await database.query(query, parameter);
        return res.json('Successfully Deleted');
    } catch (error) {
        console.error(error.message)
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
    const {scholarshipname, deadline, scholarshiptype,featured, agent, programs, applicant,hostuniversity, offeredby, aboutscholarship,scholarshipbenefits, eligibilitycriteria, documentsrequired, country, apply, duration} = req.body;

    const image = req.file.path;
    
    const query = "UPDATE image, scholarships SET scholarshipname=?, deadline=?, scholarshiptype=?,featured=?, agent=?, programs=?, applicant=?,hostuniversity=?, offeredby=?, aboutscholarship=?,scholarshipbenefits=?, eligibilitycriteria=?, documentsrequired=?, country=?, apply=?, duration=? WHERE id=?"

    const parameter = [image, scholarshipname, deadline, scholarshiptype,featured, agent, programs, applicant,hostuniversity, offeredby, aboutscholarship,scholarshipbenefits, eligibilitycriteria, documentsrequired, country, apply, duration, req.params.id];
    try {
        const [data] = await database.query(query, parameter);
        return res.json('Successfully Updated')
    } catch (error) {
        console.error(error.message)
    }
}