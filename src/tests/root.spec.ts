import request, { Response } from 'supertest';
import app from '../app';

describe('Rout urls', () => {
	test('/GET', async () => {
		const resp: Response = await request(app).get('/');
		expect(resp.status).toBe(200);
		expect(resp.body.code).toBe(200);
		expect(resp.body.message).toMatch('Hello Worl');
	});
});
