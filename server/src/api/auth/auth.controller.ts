import { Request, Response, NextFunction } from 'express';
import { registerUser } from './auth.service';

export async function register(req:Request, res:Response, next:NextFunction) {
    const { email, password, username } = req.body;
    try {
      const result = await registerUser(email, password, username);
        if(result === null) {
            res.status(401).json('User already exists');
            return;
        }
        res.json(result);
     
        
    } catch (error) {
        console.error(error);
        next(error);
    }
}