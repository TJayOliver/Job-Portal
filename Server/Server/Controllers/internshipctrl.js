import { database } from '../Database/database.js'
import {v4 as uuid} from 'uuid'

export const InternshipsGet = async(req,res) =>{
    const query = `SELECT * FROM internships`;
    try{
        const [data] = await database.query(query);
        res.send(data);
    }catch(error){
        console.error(error)
    }
};   

export const InternshipsCount = async(req, res) =>{
    const query = `SELECT COUNT (id) FROM internships`
    try{
        console.log('internships counting succesfull')
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

export const InternshipsPost = async(req,res) =>{
    const {internshipname,internshipduration,info,country,requirements,documents,apply} = req.body;
    const image = req.file.buffer;

    const query = `
    INSERT INTO internships
    (id,image,internshipname,internshipduration,info,country,requirements,documents,apply)
    VALUES(?,?,?,?,?,?,?,?,?)`
    const parameters = [uuid(),image,internshipname,internshipduration,info,country,requirements,documents,apply];
    try{
        console.log('internship connected to database')
        const [data] = await database.query(query, parameters);
        console.log('internship data posted successfully')
    }catch(error){
        console.log(error);
    }
};   

export const InternshipsDelete = async(req,res) =>{
    const {id} = req.params;
    const query = `DELETE FROM internships WHERE id=?`;
    const parameters = [id];
    try{
        console.log('internships delete connection successful')
        const [data] = await database.query(query, parameters);
        console.log('internships successfully deleted')
    }catch(error){
        console.error(error);
    }
}

// loads the internships post page
export const InternshipsEdit = async(req, res) =>{
    const query =  `SELECT * FROM internships WHERE id=?`
    const parameter = [req.params.id]
    try{
        const [data] = await database.query(query, parameter)
        res.send(data)
    }catch(error){
        console.log(error.message)
    }
}

// posts the newly updated internships
export const InternshipsUpdate = async(req,res) =>{
    const {image, internshipduration, internshipname, info, location, documents, requirements, apply, country} = req.body;
    const query = "UPDATE internships SET image=?, internshipduration=?, internshipname=?, info=?, location=?, documents=?, requirements=?, apply=?, country=? WHERE id=?"
    const parameter = [image, internshipduration, internshipname,info, location, documents, requirements, apply, country, req.params.id];
    try {
        const [data] = await database.query(query, parameter);
        console.log(data)
        return res.json('Successfully Updated')
    } catch (error) {
        console.error(error.message)
    }
}