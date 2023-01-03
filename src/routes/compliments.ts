import { router } from '@routes/index';
import { ensureAdmin as ensureAdminMiddleware } from '@middleware/index';
import { CreateComplimentController } from '../controllers/compliments/CreateComplimentController';
import { FindComplimentController } from '../controllers/compliments/FindComplimentController';
import { RemoveComplimentController } from '../controllers/compliments/RemoveComplimentController';

const createComplimentController = new CreateComplimentController();
const findComplimentController = new FindComplimentController();
const removeComplimentController = new RemoveComplimentController();

router.get('/compliments', findComplimentController.handle);
router.get('/compliments/:id', findComplimentController.handle);
router.post(
  '/compliments',
  ensureAdminMiddleware,
  createComplimentController.handle
);
router.delete(
  '/compliments/:id',
  ensureAdminMiddleware,
  removeComplimentController.handle
);

export { router };
