import { Request, Response } from 'express';
import { RemoveUserService } from '../../use-cases/users/RemoveUserService';
import { HttpStatusCode } from '../../utils/HttpStatusCode';
import {
  IResponse,
  IResponseParams, Response as ResponseHandler
} from '../../utils/Response';

class RemoveUserController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const removeUserService = new RemoveUserService();
    const { id } = request.params;
    const status = await removeUserService.execute({ id });

    const responseParams: IResponseParams = {
      statusCode: 200,
      status: HttpStatusCode.getMessage(200),
      data: status,
    };

    return response.status(200).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { RemoveUserController };

