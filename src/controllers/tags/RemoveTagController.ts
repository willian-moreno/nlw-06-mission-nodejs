import { Request, Response } from 'express';
import { RemoveTagService } from '@services/tags/RemoveTagService';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class RemoveTagController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const removeTagService = new RemoveTagService();
    const { id } = request.params;
    const status = await removeTagService.execute({ id });

    const responseParams: IResponseParams = {
      statusCode: 200,
      data: status,
    };

    return response.status(200).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { RemoveTagController };
