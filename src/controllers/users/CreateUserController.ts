import { Request, Response } from 'express';
import { CreateUserService } from '@services/users/CreateUserService';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class CreateUserController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const createUserService = new CreateUserService();
    const { name, email, password, admin } = request.body;

    await createUserService.execute({
      name,
      email,
      password,
      admin,
    });

    const responseUser: IResponseParams = {
      statusCode: 201,
    };

    return response.status(201).json(ResponseHandler.set(responseUser));
  }

  constructor() {}
}

export { CreateUserController };
