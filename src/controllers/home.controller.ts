import { Request, Response } from 'express';
import { apiResponse } from '../utils/shared';

class HomeController {
	static hello(req: Request, res: Response) {
		res.status(200).send(apiResponse(200, 'Hello World'));
	}

	static try(req: Request, res: Response) {
		res.status(200).send(apiResponse(200, 'Hello from Trial', [1, 3, 5]));
	}
}

export default HomeController;
