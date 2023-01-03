import { Request, Response } from 'express';
import { FindTagService } from '@services/tags/FindTagService';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class FindTagController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const findTagService = new FindTagService();
    const { id } = request.params;
    const tags = await findTagService.execute({ id });

    const responseParams: IResponseParams = {
      statusCode: 200,
      data: tags,
    };

    return response.status(200).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { FindTagController };
