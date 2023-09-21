import { Router, Request, Response } from "express";
import authRoutes from './auth/auth.routes';
const router = Router();

router.get('/api/health-check', (req: Request, res: Response) => {
    res.status(200).send('OK');
});

router.use('/api/auth', authRoutes);

export default router;