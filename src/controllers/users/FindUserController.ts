import { Request, Response } from 'express';
import { FindUserService } from '../../use-cases/users/FindUserService';
import { HttpStatusCode } from '../../utils/HttpStatusCode';
import {
  IResponse,
  IResponseParams, Response as ResponseHandler
} from '../../utils/Response';

class FindUserController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const findUserService = new FindUserService();
    const { id } = request.params;
    const users = await findUserService.execute({ id });

    const responseParams: IResponseParams = {
      statusCode: 200,
      status: HttpStatusCode.getMessage(200),
      data: users,
    };

    return response.status(200).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { FindUserController };

