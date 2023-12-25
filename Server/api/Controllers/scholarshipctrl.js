import {database} from '../Database/database.js';
//import {v4 as uuid} from 'uuid';
import { nanoid } from 'nanoid';
const uuid = nanoid(6)

export const ScholarshipGet = async(req,res) =>{
    const query = `SELECT *,
    DATE_FORMAT(deadline, '%d/%m/%Y') AS deadline, 
    DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated
    FROM scholarships`
    try{
        const [data] = await database.query(query)
        res.status(200).json(data)
    } 
    catch(error){
        console.error(error.message)
    }
};

export const SimilarScholarship = async(req,res) =>{
    const {countryname} = req.params;
    console.log(countryname)
    const query = `SELECT *,
    DATE_FORMAT(deadline, '%d/%m/%Y') AS deadline, 
    DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated
    FROM scholarships WHERE country=? LIMIT 15`
    try{
        const [data] = await database.query(query, [countryname])
        //console.log(data.length)
        if(data.length === 0){
            return res.status(204).json('No content')
        }
        return res.status(200).json(data)
        
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
        res.status(200).json(data);
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
    const {scholarshipname, deadline, scholarshiptype, featured, programs, country, description, scholarshipcategory,eligibility, duration,programsoffered, documentsrequired, benefits, applicationinformation} = req.body;
    const image = req.file.filename;

    const query = `INSERT INTO scholarships  
    (id, image, scholarshipname, deadline, scholarshiptype,featured, programs, country, description, scholarshipcategory,eligibility, duration,programsoffered, documentsrequired, benefits, applicationinformation,agent) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const parameter = [uuid(), image,scholarshipname, deadline, scholarshiptype, featured, programs, country, description, scholarshipcategory, eligibility, duration,programsoffered, documentsrequired, benefits, applicationinformation,agent]
    try{
        const [data] = await database.query(query, parameter)
        return res.status(200).send('Successfully Posted')
    }catch(error){
        console.error(error.message)
        return res.status(404).send('Error Posting')
    }
}

export const ScholarshipDelete = async(req,res) =>{
    const {id} = req.params;
    const query = `DELETE FROM scholarships WHERE id=?`;
    const parameter = [id];
    try {
        const [data] = await database.query(query, parameter);
        return res.status(200).json('Successfully Deleted');
    } catch (error) {
        console.error(error.message)
    }
}

export const ScholarshipDescription = async(req, res) =>{
    const query =  `SELECT *, DATE_FORMAT(datecreated, '%d/%M/%Y') AS datecreated FROM scholarships WHERE id=?`
    const parameter = [req.params.id]
    try{
        const [data] = await database.query(query, parameter)
        res.status(200).json(data)
    }catch(error){
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
    const {scholarshipname, deadline, scholarshiptype,featured, programs, country, description, scholarshipcategory, eligibility, duration,programsoffered, documentsrequired, benefits, applicationinformation,agent} = req.body;

    const image = req.file.path;
    
    const query = "UPDATE scholarships SET image=?, scholarshipname=?, deadline=?, scholarshiptype=?,featured=?, programs=?, country=?, description=?, scholarshipcategory=?, eligibility=?, duration=?, programsoffered=?, documentsrequired=?, benefits=?, applicationinformation=?, agent=? WHERE id=?"

    const parameter = [image, scholarshipname, deadline, scholarshiptype,featured, programs, country, description,scholarshipcategory,eligibility, duration,programsoffered, documentsrequired, benefits, applicationinformation,agent, req.params.id];
    try {
        const [data] = await database.query(query, parameter);
        return res.status(200).json('Successfully Updated')
    } catch (error) {
        console.error(error.message)
    }
}

export const GovernmentScholarships = async(req,res) =>{
    try{
        const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated FROM scholarships WHERE scholarshipcategory=?`;
        const parameter = ['government']
        const [data] = await database.query(query, parameter);
        res.send(data)
    }catch(error){
        console.error(error.message)
    }
}

export const InternationalScholarships = async(req,res) =>{
    try{
        const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated FROM scholarships WHERE scholarshipcategory=?`;
        const parameter = ['International']
        const [data] = await database.query(query, parameter);
        res.send(data)
    }catch(error){
        console.error(error.message)
    }
}

export const PrivateScholarships = async(req,res) =>{
    try{
        const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated FROM scholarships WHERE scholarshipcategory=?`;
        const parameter = ['Private']
        const [data] = await database.query(query, parameter);
        res.send(data)
    }catch(error){
        console.error(error.message)
    }
}

export const OrganizationalScholarships = async(req,res) =>{
    try{
        const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated FROM scholarships WHERE scholarshipcategory=?`;
        const parameter = ['Organizational']
        const [data] = await database.query(query, parameter);
        res.send(data)
    }catch(error){
        console.error(error.message)
    }
}

export const ResearchScholarships = async(req,res) =>{
    try{
        const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%m/%Y') AS datecreated FROM scholarships WHERE scholarshipcategory=?`;
        const parameter = ['Research']
        const [data] = await database.query(query, parameter);
        res.send(data)
    }catch(error){
        console.error(error.message)
    }
}

