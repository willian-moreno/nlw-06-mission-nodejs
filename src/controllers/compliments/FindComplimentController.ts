import { Request, Response } from 'express';
import { FindComplimentService } from '@services/compliments/FindComplimentService';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class FindComplimentController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const findComplimentService = new FindComplimentService();
    const { id } = request.params;
    const tags = await findComplimentService.execute({ id });

    const responseParams: IResponseParams = {
      statusCode: 200,
      data: tags,
    };

    return response.status(200).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { FindComplimentController };
