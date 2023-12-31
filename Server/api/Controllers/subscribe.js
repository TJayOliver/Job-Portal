import {database} from '../Database/database.js';
import { nanoid } from 'nanoid';
const uuid = nanoid(6);

export const SubscribeGet = async(req, res) =>{
    const query = 'SELECT * FROM subscribe';
    try{
        const [data] = await database.query(query);
        res.json(data);
    }catch(error){
        console.error(error.message)
    }
}

export const SubscribePost = async(req,res) =>{
    const {email} = req.body;
    const Email = email.trim();
    const id = uuid();
    if(Email.length === 0){
        return res.status(404).json({message:'Cannot be empty'})
    }
    try{
        const existQuery = 'SELECT * FROM subscribe WHERE email=?'
        const [response] = await database.query(existQuery, Email)
        if(response.length > 0){
            return res.json({message : 'Email Address already exists'})
        }else{
            const query='INSERT INTO subscribe(id,email) VALUES(?,?)'
            const parameter = [id, Email];
            const [data] = await database.query(query, parameter);
            res.status(200).json({message:'Thank You'})
        }
    }catch(error){
        console.error(error.message)
    }
}