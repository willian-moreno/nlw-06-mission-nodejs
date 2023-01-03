import { Request, Response } from 'express';
import { AuthenticateUserService } from '@services/auth/AuthenticateUserService';
import { HttpStatusCode } from '@utils/HttpStatusCode';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class AuthenticateUserController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const authenticateUserService = new AuthenticateUserService();
    const { email, password } = request.body;

    const token = await authenticateUserService.execute({ email, password });

    const responseParams: IResponseParams = {
      statusCode: 201,
      data: token,
    };

    return response.status(201).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { AuthenticateUserController };
