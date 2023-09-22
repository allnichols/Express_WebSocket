import pool from "../../config/db";
import { hash, genSalt, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export async function registerUser(email:string, password: string, name: string ){
    try {
        const user = await pool.query("SELECT * FROM users WHERE email = $1 AND name = $2", [email, name]);

        if (user.rows.length !== 0) {
            return null;
        } 

        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);
        console.log(typeof hashedPassword)
        const newUser = await pool.query(
            "INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING *",
            [email, hashedPassword, name]
        )

        const jwtToken = sign({ user: newUser.rows[0].id }, process.env.TOKEN_SECRET!);

        return jwtToken;

    } catch (error) {
        console.error('REGISTER ERROR',error);
    } 
}

export async function loginUser(email:string, password:string): Promise<string | { error: string } | undefined>{
    try {
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (user.rows.length === 0) {
            return { error: 'User does not exist'};
        } 

        const validPassword = await compare(password, user.rows[0].password);

        if (!validPassword) {
            return { error: 'Password is incorrect' };
        }

        const jwtToken = sign({ user: user.rows[0].id }, process.env.TOKEN_SECRET!);

        return jwtToken;

    } catch (error) {
        console.error('LOGIN ERROR',error);
    } 
}