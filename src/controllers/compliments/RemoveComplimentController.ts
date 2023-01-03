import { Request, Response } from 'express';
import { RemoveComplimentService } from '@services/compliments/RemoveComplimentService';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class RemoveComplimentController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const removeComplimentService = new RemoveComplimentService();
    const { id } = request.params;
    const status = await removeComplimentService.execute({ id });

    const responseParams: IResponseParams = {
      statusCode: 200,
      data: status,
    };

    return response.status(200).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { RemoveComplimentController };
