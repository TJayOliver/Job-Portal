import { database } from "../Database/database.js";
import {v4 as uuid} from 'uuid';

export const CategoryGet = async(req,res) =>{
    const query = `SELECT * FROM categories ORDER BY categoriesname ASC`;
    try{
        console.log('category data retrieved')
        const [data] = await database.query(query);
        res.send(data);
    }catch(error){
        console.error(error)
    }
};

export const CategoryPost = async(req,res) =>{
    const {categoriesname} = req.body;
    const categoriesName = categoriesname.trim();

    if(categoriesName.length === 0){
        return res.json('Category Name cannot be Empty')
    }
    const checkquery = `SELECT * FROM categories WHERE categoriesname=?`
    const checkparameters = [categoriesName]
    const [response] = await database.query(checkquery, checkparameters);
    if(response.length > 0){
        return res.json(`${categoriesName} Already exist`)
    }
    else{
        const query = `INSERT INTO categories(id,categoriesname) VALUES(?,?)`;
        const parameters = [uuid(), categoriesName];
        try{
            const [data] = await database.query(query, parameters);
            return res.json(`${categoriesName} Successfully Added`)
        }catch(error){
            console.log(error);
        }
    }
}


export const CategoryDelete = async(req,res) =>{
    const {id} = req.params;
    const query = `DELETE FROM categories WHERE id=?`;
    const parameters = [id];
    try{
        console.log('categories delete connection successful')
        const [data] = await database.query(query, parameters);
        console.log('category successfully deleted')
    }catch(error){
        console.error(error);
    }
}