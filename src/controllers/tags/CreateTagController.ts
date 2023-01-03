import { Request, Response } from 'express';
import { CreateTagService } from '../../use-cases/tags/CreateTagService';
import { HttpStatusCode } from '../../utils/HttpStatusCode';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '../../utils/Response';

class CreateTagController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const createTagService = new CreateTagService();
    const { name } = request.body;
    const tag = await createTagService.execute({ name });

    const responseParams: IResponseParams = {
      statusCode: 201,
      status: HttpStatusCode.getMessage(201),
      data: tag,
    };

    return response.status(201).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { CreateTagController };
