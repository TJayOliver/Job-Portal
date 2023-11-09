import { database } from "../Database/database.js";
import {v4 as uuid} from 'uuid';

export const ArticleGet = async(req, res) =>{
    const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles ORDER BY datecreated DESC`;
    try{
        const [data] = await database.query(query);
        res.json(data);
    }catch(error){
        console.error(error)
    }
};

export const ArticlesOnDescriptionPage = async(req, res) =>{
    const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles ORDER BY datecreated DESC LIMIT 10`;
    try{
        const [data] = await database.query(query);
        res.json(data);
    }catch(error){
        console.error(error)
    }
};

export const ArticlesDescription = async(req, res) =>{
    const query =  `SELECT *, DATE_FORMAT(datecreated, '%d/%M/%Y') AS datecreated FROM articles WHERE id=?`
    const parameter = [req.params.id]
    try{
        const [data] = await database.query(query, parameter)
        res.json(data)
    }catch(error){
        console.error(error.message)
    }
}

export const ArticlesMainFeatured = async(req,res) =>{
    const query = `SELECT *, DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles WHERE mainfeatured=? ORDER BY datecreated LIMIT 1`;
    const parameter = ['true']
    try{
        const [data] = await database.query(query, parameter);
        res.json(data);
    }catch(error){
        console.error(error.message);
    }
}

export const ArticlesFeatured = async(req,res) =>{
    const query = `SELECT *, DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles WHERE featured=? LIMIT 4`;
    const parameter = ['true']
    try{
        const [data] = await database.query(query, parameter);
        res.json(data);
    }catch(error){
        console.error(error.message);
    }
}

export const ArticlesMustRead = async(req,res) =>{
    const query = `SELECT *, DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles WHERE mustread=? LIMIT 4`;
    const parameter = ['true']
    try{
        const [data] = await database.query(query, parameter);
        res.json(data);
    }catch(error){
        console.error(error.message);
    }
}

export const ArticleCount = async(req, res) =>{
    const query = `SELECT COUNT (id) FROM articles`
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

export const ArticlePost = async(req, res) =>{
    const {title,briefinfo,post,featured,mustread, mainfeatured} = req.body;
    const image = req.file.path;

    const query = `INSERT INTO articles
    (id,image,title,briefinfo,post,featured,mustread,mainfeatured)
    VALUES(?,?,?,?,?,?,?,?)`;
    const parameter = [uuid(),image, title, briefinfo, post,featured,mustread,mainfeatured];
    try{
        const [data] = await database.query(query, parameter);
    }catch(error){
        console.error(error.message);
    }
}

export const ArticleDelete = async(req,res) =>{
    const {id} = req.params;
    const query = `DELETE FROM articles WHERE id=?`;
    const parameter = [id];
    try {
        const [data] = await database.query(query, parameter);
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
    const {title, briefinfo, post,featured,mustread, mainfeatured} = req.body;
    const image = req.file.path;

    const query = "UPDATE articles SET image=?, title=?, briefinfo=?, post=?, featured=?, mustread=?, mainfeatured=? WHERE id=?"
    const parameter = [image, title, briefinfo, post, featured, mustread, mainfeatured, req.params.id];
    try {
        const [data] = await database.query(query, parameter);
        return res.json('Successfully Updated')
    } catch (error) {
        console.error(error.message)
    }
}


