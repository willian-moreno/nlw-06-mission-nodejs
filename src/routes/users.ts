import { router } from '../routes';
import { CreateUserController } from '../controllers/CreateUserController';

const createUserController = new CreateUserController();

router.post('/users', createUserController.handle);

export { router };
