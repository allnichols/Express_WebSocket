import { Router, Request, Response } from "express";
import authRoutes from './auth/auth.routes';
const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
    res.send('OK');
});

router.use('/api/auth', authRoutes);

export default router;