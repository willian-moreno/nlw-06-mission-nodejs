import { router } from '@routes/index';
import { AuthenticateUserController } from '@controllers/auth/AuthenticateUserController';

const authenticateUserController = new AuthenticateUserController();

router.post('/auth/login', authenticateUserController.handle);

export { router };
