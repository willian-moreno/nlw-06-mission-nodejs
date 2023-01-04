import { router } from '@routes/index';
import { CreateTagController } from '@controllers/tags/CreateTagController';
import { FindTagController } from '@controllers/tags/FindTagController';
import { RemoveTagController } from '@controllers/tags/RemoveTagController';
import {
  ensureAdmin as ensureAdminMiddleware,
  ensureAuthenticated as ensureAuthenticatedMiddleware,
} from '@middleware/index';

const createTagController = new CreateTagController();
const findTagController = new FindTagController();
const removeTagsController = new RemoveTagController();

router.get(
  '/tags',
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  findTagController.handle
);
router.get(
  '/tags/from/:id',
  ensureAuthenticatedMiddleware,
  findTagController.handle
);
router.post(
  '/tags',
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  createTagController.handle
);
router.delete(
  '/tags/from/:id',
  ensureAuthenticatedMiddleware,
  ensureAdminMiddleware,
  removeTagsController.handle
);

export { router };
