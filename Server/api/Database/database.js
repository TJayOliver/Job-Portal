import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config()

export const database = mysql2.createPool({
    host : process.env.HOST,
    user : process.env.USER,
    port : process.env.PORT,
    database : process.env.DATABASE,
    password : process.env.PASSWORD
});

