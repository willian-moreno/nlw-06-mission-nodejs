import { Request, Response } from 'express';
import { CreateTagService } from '../use-cases/CreateTagService';

class CreateTagController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createTagService = new CreateTagService();
    const { name } = request.body;
    const user = await createTagService.execute({ name });

    return response.status(200).json(user);
  }

  constructor() {}
}

export { CreateTagController };
