import request from 'supertest';
import app from '../express';
import pool from '../db';

describe('express', () => {
    afterAll(() => {
        pool.end(() => { })
    });
    
    it('should return 404', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(404);
    });

    it('should return 200', async () => {
        const res = await request(app).get('/api/health-check');
        expect(res.statusCode).toEqual(200);
        console.log(res.body);
    });

});
