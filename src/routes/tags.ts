import { router } from '../routes';
import { CreateTagController } from '../controllers/tags/CreateTagController';
import { FindTagController } from '../controllers/tags/FindTagController';
import { RemoveTagController } from '../controllers/tags/RemoveTagController';
import { ensureAdmin as ensureAdminMiddleware } from '../middlewares';

const createTagController = new CreateTagController();
const findTagController = new FindTagController();
const removeTagsController = new RemoveTagController();

router.get('/tags', findTagController.handle);
router.get('/tags/:id', findTagController.handle);
router.post('/tags', ensureAdminMiddleware, createTagController.handle);
router.delete('/tags/:id', ensureAdminMiddleware, removeTagsController.handle);

export { router };
