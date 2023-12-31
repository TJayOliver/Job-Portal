import { database } from "../Database/database.js";
import { nanoid } from 'nanoid';
const uuid = nanoid(6);

export const ArticleGet = async(req, res) =>{
    const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles ORDER BY datecreated DESC`;
    try{
        const [data] = await database.query(query);
        res.status(200).json(data);
    }catch(error){
        console.error(error)
    }
};

export const ArticlesOnDescriptionPage = async(req, res) =>{
    const query = `SELECT *,DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles ORDER BY datecreated DESC LIMIT 10`;
    try{
        const [data] = await database.query(query);
        res.status(200).json(data);
    }catch(error){
        console.error(error)
    }
};

export const ArticlesDescription = async(req, res) =>{
    const query =  `SELECT *, DATE_FORMAT(datecreated, '%d/%M/%Y') AS datecreated FROM articles WHERE id=?`
    const parameter = [req.params.id]
    try{
        const [data] = await database.query(query, parameter)
        res.status(200).json(data);
    }catch(error){
        console.error(error.message)
    }
}

export const ArticlesMainFeatured = async(req,res) =>{
    const query = `SELECT *, DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles WHERE mainfeatured=? ORDER BY datecreated LIMIT 1`;
    const parameter = ['true']
    try{
        const [data] = await database.query(query, parameter);
        res.status(200).json(data);
    }catch(error){
        console.error(error.message);
    }
}

export const ArticlesFeatured = async(req,res) =>{
    const query = `SELECT *, DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles WHERE featured=? LIMIT 4`;
    const parameter = ['true']
    try{
        const [data] = await database.query(query, parameter);
        res.status(200).json(data);
    }catch(error){
        console.error(error.message);
    }
}

export const ArticlesScholarship = async(req,res) =>{
    const query = `SELECT *, DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles WHERE articlecategory=? LIMIT 4`;
    const parameter = ['Scholarship']
    try{
        const [data] = await database.query(query, parameter);
        res.status(200).json(data);
    }catch(error){
        console.error(error.message);
    }
}

export const ArticlesMustRead = async(req,res) =>{
    const query = `SELECT *, DATE_FORMAT(datecreated, '%d/%m/%y') AS datecreated FROM articles WHERE mustread=? LIMIT 4`;
    const parameter = ['true']
    try{
        const [data] = await database.query(query, parameter);
        res.status(200).json(data);
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
        return res.status(200).send(count);
    }catch(error){
        console.error(error)
    }
}

export const ArticlePost = async(req, res) =>{
    const {title,post,featured,mustread, mainfeatured} = req.body;
    const image = req.file.path;

    const query = `INSERT INTO articles
    (id,image,title,post,featured,mustread,mainfeatured)
    VALUES(?,?,?,?,?,?,?)`;
    const parameter = [uuid(),image, title,post,featured,mustread,mainfeatured];
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
        res.status(200).json('Successfully Deleted');
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
        res.status(200).json(data);
    }catch(error){
        console.log(error.message)
    }
}

// posts the newly updated article 
export const ArticleUpdate = async(req,res) =>{
    const {title, post,featured,mustread, mainfeatured} = req.body;
    const image = req.file.path;

    const query = "UPDATE articles SET image=?, title=?, post=?, featured=?, mustread=?, mainfeatured=? WHERE id=?"
    const parameter = [image, title, post, featured, mustread, mainfeatured, req.params.id];
    try {
        const [data] = await database.query(query, parameter);
        return res.status(200).json('Successfully Updated')
    } catch (error) {
        console.error(error.message)
    }
}

