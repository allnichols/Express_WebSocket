import { Request, Response, NextFunction } from 'express';

export default function ValidInfo(req: Request, res: Response, next: NextFunction) {
    const { email, password, name } = req.body;
    function validEmail(userEmail: string) {
        // eslint-disable-next-line no-useless-escape
        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return validEmail.test(userEmail);
    }
    if (req.path === '/register') {
        if (![email, password, name].every(Boolean)) {
            return res.status(401).json('Missing Credentials');
        } else if (!validEmail(email)) {
            return res.status(401).json('Invalid Email');
        }
    } else if (req.path === '/login') {
        if (![email, password].every(Boolean)) {
            return res.status(401).json('Missing Credentials');
        } else if (!validEmail(email)) {
            return res.status(401).json('Invalid Email');
        }
    }
    next();
}