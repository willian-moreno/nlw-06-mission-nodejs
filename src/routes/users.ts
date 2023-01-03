import { router } from '@routes/index';
import { CreateUserController } from '@controllers/users/CreateUserController';
import { FindUserController } from '@controllers/users/FindUserController';
import { RemoveUserController } from '@controllers/users/RemoveUserController';
import { ensureAdmin as ensureAdminMiddleware } from '@middleware/index';

const createUserController = new CreateUserController();
const findUserController = new FindUserController();
const removeUsersController = new RemoveUserController();

router.get('/users', findUserController.handle);
router.get('/users/:id', findUserController.handle);
router.post('/users', ensureAdminMiddleware, createUserController.handle);
router.delete(
  '/users/:id',
  ensureAdminMiddleware,
  removeUsersController.handle
);

export { router };
