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