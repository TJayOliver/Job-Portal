import {database} from '../Database/database.js';
import {v4 as uuid} from 'uuid';

export const GraduateJobGet = async(req,res) =>{
    const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%M/%Y') AS datecreated FROM graduatejobs`;
    try{
        const [data] = await database.query(query);
        res.send(data);
    }catch(error){
        console.error(error.message);
    }
}

export const GraduateJobCount = async(req, res) =>{
    const query = `SELECT COUNT (id) FROM graduatejobs`
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

export const GraduateJobPost = async(req,res) =>{
    const {company,salary,location,position,duration,country,minimumqualification,experiencelevel,experiencelength,responsibilities,requirements,otherinformation,apply,categoriesname} = req.body;
    const image = req.file.path;

    const query = `INSERT INTO graduatejobs
    (id,image,company,salary,location,position,duration,country,minimumqualification,experiencelevel,experiencelength,responsibilities,requirements,otherinformation,apply,categoriesname)
    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const parameters = [uuid(),image,company,salary,location,position,duration,country,minimumqualification,experiencelevel,experiencelength,responsibilities,requirements,otherinformation,apply,categoriesname]
    try{
        const [data] = database.query(query, parameters);
    }catch(error){
        console.error(error.message)
    }
}

export const GraduateJobDelete = async(req,res) =>{
    const {id} = req.params;
    const query = `DELETE FROM graduatejobs WHERE id=?`;
    const parameter = [id];
    try {
        const [data] = await database.query(query, parameter);
        return res.json('Successfully Deleted');
    } catch (error) {
        console.error(error)
    }
}

// loads the graduatejobs post page
export const GraduateJobsEdit = async(req, res) =>{
    const query =  `SELECT * FROM graduatejobs WHERE id=?`
    const parameter = [req.params.id]
    try{
        const [data] = await database.query(query, parameter)
        res.send(data)
    }catch(error){
        console.log(error.message)
    }
}

// posts the newly updated graduate jobs 
export const GraduateJobsUpdate = async(req,res) =>{
    const {company,salary,location,position,duration,country,minimumqualification,experiencelevel,experiencelength,responsibilities,requirements,otherinformation,apply,category} = req.body;
    const image = req.file.buffer;

    const query = "UPDATE graduatejobs SET image=? company=?,salary=?,location=?,position=?,duration=?,country=?,minimumqualification=?,experiencelevel=?,experiencelength=?,responsibilities=?,requirements=?,otherinformation=?,apply=?,category=? WHERE id=?"
    
    const parameter = [image, company,salary,location,position,duration,country,minimumqualification,experiencelevel,experiencelength,responsibilities,requirements,otherinformation,apply,category, req.params.id];
    try {
        const [data] = await database.query(query, parameter);
        return res.json('Successfully Updated')
    } catch (error) {
        console.error(error.message)
    }
}