import { pool } from "../server/db.js";



/* SELECTS */

export const getAllUsers = async(req, res) => {
    try{
        const [result] = await pool.query('select * from users');
        res.send(result);
    }
    catch{
        res.status(500).json({message: error.message});
    }
}

export const checkLogin = async(req, res) => {

    const { email, password } = req.body;
    console.log(email, password);
    try { 
        const [result] = await pool.query('Select * from users where user_email = ? and user_password = ?', [email, password]);
        console.log("result from checklogin:", result);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}