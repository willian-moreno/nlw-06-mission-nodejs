import { Request, Response } from 'express';
import { CreateUserService } from '../../use-cases/users/CreateUserService';
import { HttpStatusCode } from '../../utils/HttpStatusCode';
import {
  IResponse,
  IResponseParams, Response as ResponseHandler
} from '../../utils/Response';

class CreateUserController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const createUserService = new CreateUserService();
    const { name, email, admin } = request.body;
    const user = await createUserService.execute({ name, email, admin });

    const responseUser: IResponseParams = {
      statusCode: 201,
      status: HttpStatusCode.getMessage(201),
      data: user,
    };

    return response.status(201).json(ResponseHandler.set(responseUser));
  }

  constructor() {}
}

export { CreateUserController };

