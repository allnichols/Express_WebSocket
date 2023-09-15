import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from './auth.service';

export async function register(req:Request, res:Response, next:NextFunction) {
    const { email, password, name } = req.body;
    try {
      const result = await registerUser(email, password, name);
        if(result === null) {
            res.status(401).json('User already exists');
            return;
        }
        res.status(200).json({token: result});
    } catch (error) {
        console.error(error);
        next(error);
    }
}

export async function login(req:Request, res:Response, next:NextFunction) {
    const { email, password } = req.body;
    try {
        const result = await loginUser(email, password);
        if(typeof result === 'object' && result.error) {
            res.status(401).json(result.error);
            return;
        }
        res.status(200).json({token: result});
    } catch (error) {
        console.error(error);
        next(error);
    }
}