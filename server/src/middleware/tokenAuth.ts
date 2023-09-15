import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default async function TokenAuth(req: Request, res: Response, next: NextFunction) {
    const token = req.header('auth-token');
    if (!token) {
        res.status(403).json('Access Denied');
        return;
    }
    try {
        const verified = verify(token, process.env.TOKEN_SECRET!);
        req.user = verified.user;
        next();
    } catch (error) {
        res.status(400).json('Invalid Token');
    }
}