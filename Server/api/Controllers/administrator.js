import { database } from "../Database/database.js";

export const Login = async(req, res)=>{
    const {username, password} = req.body;
    try{
        const usernameQuery = `SELECT username from administrator WHERE username = ?`
        const usernameParameter = [username]
        const [data] = await database.query(usernameQuery, usernameParameter);
        if(data.length > 0){
            const user = data[0].username
            const passwordQuery =`SELECT username, password FROM administrator WHERE username=?`
            const [response] = await database.query(passwordQuery, [user]);
            const pass = response[0].password;
            if(pass === password){
                return res.status(200).json({message:'Login Successfull'})
            }else{
                return res.json({message:'Password is Incorrect'}).status(401)
            }
        }else{
            return res.json({message:'Username not found'}).status(401)
        }
    }catch(error){
        console.error(error.message)
        res.status(500)
    }
}