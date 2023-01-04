import { router } from '@routes/index';
import { CreateComplimentController } from '../controllers/compliments/CreateComplimentController';
import { FindComplimentController } from '../controllers/compliments/FindComplimentController';
import { RemoveComplimentController } from '../controllers/compliments/RemoveComplimentController';
import {
  ensureAdmin as ensureAdminMiddleware,
  ensureAuthenticated as ensureAuthenticatedMiddleware,
} from '@middleware/index';

const createComplimentController = new CreateComplimentController();
const findComplimentController = new FindComplimentController();
const removeComplimentController = new RemoveComplimentController();

router.get(
  '/compliments',
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  findComplimentController.handle
);
router.get(
  '/compliments/from/:id',
  ensureAuthenticatedMiddleware,
  findComplimentController.handle
);
router.post(
  '/compliments',
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  createComplimentController.handle
);
router.delete(
  '/compliments/from/:id',
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  removeComplimentController.handle
);

export { router };
