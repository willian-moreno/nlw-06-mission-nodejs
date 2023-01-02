import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();

/** --------------- Users --------------- */

const createUserController = new CreateUserController();

router.post('/users', createUserController.handle);

export { router };
