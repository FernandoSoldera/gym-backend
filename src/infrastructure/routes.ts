import { Router } from 'express';
import UserController from './rest-api/input/controllers/UserController';
import PhysicalEvaluationController from './rest-api/input/controllers/PhysicalEvaluationController';

const api = Router().use(UserController).use(PhysicalEvaluationController);

export default Router().use('/api', api);
