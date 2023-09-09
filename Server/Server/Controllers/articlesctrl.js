import { database } from "../Database/database.js";
import {v4 as uuid} from 'uuid';

export const ArticleGet = async(req, res) =>{
    const query = `SELECT * FROM articles`;
    try{
        console.log('articles database connection successfull')
        const [data] = await database.query(query);
        console.log('articles data retrieved')
        res.send(data);
    }catch(error){
        console.error(error)
    }
};

export const ArticleToday = async(req, res) =>{
    const today = new Date(), 
    day = today.getUTCDay().toString(), 
    month = today.getUTCMonth().toString(), 
    year = today.getUTCFullYear().toString();
    
    let current = year + "-" + month + "-" + day
    const query = `SELECT * FROM articles WHERE datecreated=?`
    const parameter = [current]
    try{
        const [data] = await database.query(query, parameter);
        res.send(data)
    }catch(error){
        console.error(error)
    }
}

export const ArticleCount = async(req, res) =>{
    const query = `SELECT COUNT (id) FROM articles`
    try{
        console.log('articles counting succesfull')
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

export const ArticlePost = async(req, res) =>{
    const {title,briefinfo,post} = req.body;
    const image = req.file.buffer;

    const query = `INSERT INTO articles
    (id,image,title,briefinfo,post)
    VALUES(?,?,?,?,?)`;
    const parameter = [uuid(),image, title, briefinfo, post];
    try{
        const [data] = await database.query(query, parameter);
        console.log('articles successfully posted');
    }catch(error){
        console.log(error);
    }
}