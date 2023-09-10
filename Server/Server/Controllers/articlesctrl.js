import { database } from "../Database/database.js";
import {v4 as uuid} from 'uuid';

const date = () =>{
    const today = new Date(), 
    day = today.getDate(), 
    month = Number(today.getMonth().toString()) + 1, 
    year = today.getFullYear().toString();
    const current = year + "-" + month + "-" + day;
    return current;
}

export const ArticleGet = async(req, res) =>{
    const query = `SELECT * FROM articles ORDER BY datecreated DESC`;
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
    const query = `SELECT * FROM articles WHERE datecreated=?`
    const parameter = [date()]
    try{
        const [data] = await database.query(query, parameter);
        res.send(data)
    }catch(error){
        console.error(error)
    }
}

export const ArticleTodayCount = async(req,res) =>{
    const query = `SELECT COUNT(datecreated) FROM articles WHERE datecreated=?`
    const parameter = [date()]
    try{
        const [data] = await database.query(query, parameter)
        let count = "";
        data.map((newData)=>{
            const c = Object.values(newData);
            count += c;
        });
        return res.send(count)
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

export const ArticleDelete = async(req,res) =>{
    const {id} = req.params;
    const query = `DELETE FROM articles WHERE id=?`;
    const parameter = [id];
    try {
        const [data] = await database.query(query, parameter);
        console.log('deleted');
        return res.json('Successfully Deleted');
    } catch (error) {
        console.error(error)
    }
}

// loads the article post page
export const ArticleEdit = async(req, res) =>{
    const query =  `SELECT * FROM articles WHERE id=?`
    const parameter = [req.params.id]
    try{
        const [data] = await database.query(query, parameter)
        res.send(data)
    }catch(error){
        console.log(error.message)
    }
}

// posts the newly updated article 
export const ArticleUpdate = async(req,res) =>{
    const {title, briefinfo, post} = req.body;
    const query = "UPDATE articles SET title=?, briefinfo=?, post=? WHERE id=?"
    const parameter = [title, briefinfo, post, req.params.id];
    try {
        const [data] = await database.query(query, parameter);
        console.log(data)
        return res.json('Successfully Updated')
    } catch (error) {
        console.error(error.message)
    }
}

