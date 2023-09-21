import {database} from '../Database/database.js';
import {v4 as uuid} from 'uuid';

export const GraduateJobGet = async(req,res) =>{
    const query = `SELECT * FROM graduatejobs`;
    try{
        console.log('graduatejob connection successfull')
        const [data] = await database.query(query);
        console.log('graduatejob data retrieved');
        res.send(data);
    }catch(error){
        console.log(error);
    }
}

export const GraduateJobCount = async(req, res) =>{
    const query = `SELECT COUNT (id) FROM graduatejobs`
    try{
        console.log('graduatejobs counting succesfull')
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
    const {company,salary,location,duration,country,minimumqualification,experiencelevel,experiencelength,responsibilities,requirements,otherinformation,apply,category} = req.body;
    const image = req.file.buffer;

    const query = `INSERT INTO graduatejobs
    (id,image,company,salary,location,duration,country,minimumqualification,experiencelevel,experiencelength,responsibilities,requirements,otherinformation,apply,category)
    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const parameters = [uuid(),image,company,salary,location,duration,country,minimumqualification,experiencelevel,experiencelength,responsibilities,requirements,otherinformation,apply, category]
    try{
        console.log('graduatejobs connected successfully')
        const [data] = database.query(query, parameters);
        console.log('graduatejobs forms successfully posted')
    }catch(error){
        console.log(error)
    }
}

export const GraduateJobDelete = async(req,res) =>{
    const {id} = req.params;
    const query = `DELETE FROM graduatejobs WHERE id=?`;
    const parameter = [id];
    try {
        const [data] = await database.query(query, parameter);
        console.log('deleted');
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
    const {company,salary,location,duration,country,minimumqualification,experiencelevel,experiencelength,responsibilities,requirements,otherinformation,apply,category} = req.body;
    const image = req.file.buffer;

    const query = "UPDATE graduatejobs SET image=? company=?,salary=?,location=?,duration=?,country=?,minimumqualification=?,experiencelevel=?,experiencelength=?,responsibilities=?,requirements=?,otherinformation=?,apply=?,category=? WHERE id=?"
    
    const parameter = [image, company,salary,location,duration,country,minimumqualification,experiencelevel,experiencelength,responsibilities,requirements,otherinformation,apply,category, req.params.id];
    try {
        const [data] = await database.query(query, parameter);
        console.log(data)
        return res.json('Successfully Updated')
    } catch (error) {
        console.error(error.message)
    }
}