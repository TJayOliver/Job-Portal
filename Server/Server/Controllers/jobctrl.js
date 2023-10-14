import {database} from '../Database/database.js';
import {v4 as uuid} from 'uuid';

export const JobGet = async(req,res) =>{
    const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%M/%Y') AS datecreated FROM jobs`;
    try{
        const [data] = await database.query(query);
        res.json(data);
    }catch(error){
        console.error(error.message);
    }
}

export const JobCategory = async(req, res) =>{
    try{

    }catch(error){
        console.error(error.message)
    }
}

export const JobDescription = async(req, res) =>{
    const query =  `SELECT *, DATE_FORMAT(datecreated, '%d/%M/%Y') AS datecreated FROM jobs WHERE id=?`
    const parameter = [req.params.id]
    try{
        const [data] = await database.query(query, parameter)
        res.send(data)
    }catch(error){
        console.error(error.message)
    }
}

export const JobCount = async(req, res) =>{
    const query = `SELECT COUNT (id) FROM jobs`
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

export const JobPost = async(req,res) =>{
    const {company,salary,location,position,duration,responsibilities,responsibilitiestwo,responsibilitiesthree,responsibilitiesfour,requirements,requirementstwo,requirementsthree,requirementsfour,otherinformation,apply,categoriesname} = req.body;
    const image = req.file.path

    const query = `INSERT INTO jobs
    (id,image,company,salary,location,position,duration,responsibilities,responsibilitiestwo,responsibilitiesthree,responsibilitiesfour,requirements,requirementstwo,requirementsthree,requirementsfour,otherinformation,apply,categoriesname)
    VALUES(?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?, ?, ?, ?, ?, ?)`;
    const parameters = [uuid(),image,company,salary,location,position,duration,responsibilities,responsibilitiestwo,responsibilitiesthree,responsibilitiesfour,requirements,requirementstwo,requirementsthree,requirementsfour,otherinformation,apply,categoriesname]
    try{
        const [data] = database.query(query, parameters);
    }catch(error){
        console.error(error.message)
    }
}

export const JobDelete = async(req,res) =>{
    const {id} = req.params;
    const query = `DELETE FROM jobs WHERE id=?`;
    const parameter = [id];
    try {
        const [data] = await database.query(query, parameter);
        return res.json('Successfully Deleted');
    } catch (error) {
        console.error(error)
    }
}


export const JobsEdit = async(req, res) =>{
    const query =  `SELECT * FROM jobs WHERE id=?`
    const parameter = [req.params.id]
    try{
        const [data] = await database.query(query, parameter)
        res.send(data)
    }catch(error){
        console.error(error.message)
    }
}

// posts the newly updated  jobs 
export const JobsUpdate = async(req,res) =>{
    const {company,salary,location,position,duration,responsibilities,responsibilitiestwo,responsibilitiesthree,responsibilitiesfour,requirements,requirementstwo,requirementsthree,requirementsfour,otherinformation,apply,category} = req.body;
    const image = req.file.path;

    const query = "UPDATE jobs SET image=? company=?,salary=?,location=?,position=?,duration=?,responsibilities=?,responsibilitiestwo=?,responsibilitiesthree=?,responsibilitiesfour=?,requirements=?,requirementstwo=?,requirementsthree=?,requirementsfour=?,otherinformation=?,apply=?,category=? WHERE id=?"
    
    const parameter = [image, company,salary,location,position,duration,responsibilities,responsibilitiestwo,responsibilitiesthree,responsibilitiesfour,requirements,requirementstwo,requirementsthree,requirementsfour,otherinformation,apply,category, req.params.id];
    try {
        const [data] = await database.query(query, parameter);
        return res.json('Successfully Updated')
    } catch (error) {
        console.error(error.message)
    }
}

