import { router } from '../routes';
import { CreateTagController } from '../controllers/CreateTagController';

const createTagController = new CreateTagController();

router.post('/tags', createTagController.handle);

export { router };
