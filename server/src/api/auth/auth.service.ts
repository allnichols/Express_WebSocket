import pool from "../../config/db";
import { compare, hash, genSalt } from "bcrypt";
import { sign } from "jsonwebtoken";

export async function registerUser(email:string, password: string, username: string){
    try {
        const user = await pool.query("SELECT * FROM users WHERE (email, username) VALUES ($1, $2)", [email, username]);

        if (user.rows.length !== 0) {
            return null;
        } 

        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);

        const newUser = await pool.query(
            'INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING id AS "userId"', 
            [email, hashedPassword, username]
        )

        console.log(newUser.rows);

        return newUser.rows[0];

        // const token = sign({ user: newUser.rows[0].id }, process.env.TOKEN_SECRET!);

    } catch (error) {
        console.error(error);
    } 
}