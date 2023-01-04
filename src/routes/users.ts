import { router } from '@routes/index';
import { CreateUserController } from '@controllers/users/CreateUserController';
import { FindUserController } from '@controllers/users/FindUserController';
import { RemoveUserController } from '@controllers/users/RemoveUserController';
import { FindUserReceiveComplimentsController } from '@controllers/users/FindUserReceiveComplimentsController';
import { FindUserSendComplimentsController } from '@controllers/users/FindUserSendComplimentsController';
import {
  ensureAdmin as ensureAdminMiddleware,
  ensureAuthenticated as ensureAuthenticatedMiddleware,
} from '@middleware/index';

const createUserController = new CreateUserController();
const findUserController = new FindUserController();
const removeUsersController = new RemoveUserController();
const findUserReceiveComplimentsController =
  new FindUserReceiveComplimentsController();
const findUserSendComplimentsController =
  new FindUserSendComplimentsController();

router.get(
  '/users',
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  findUserController.handle
);

router.get(
  '/users/from/:id',
  ensureAuthenticatedMiddleware,
  findUserController.handle
);

router.get(
  '/users/compliments/send',
  ensureAuthenticatedMiddleware,
  findUserSendComplimentsController.handle
);

router.get(
  '/users/compliments/receive',
  ensureAuthenticatedMiddleware,
  findUserReceiveComplimentsController.handle
);

router.post(
  '/users',
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  createUserController.handle
);

router.delete(
  '/users/from/:id',
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  removeUsersController.handle
);

export { router };
