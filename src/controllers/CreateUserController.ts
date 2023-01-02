import { Request, Response } from 'express';
import { CreateUserService } from '../use-cases/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserService = new CreateUserService();

    const { name, email, admin } = request.body;

    const user = await createUserService.execute({ name, email, admin });

    return response.json(user);
  }

  constructor() {}
}

export { CreateUserController };
