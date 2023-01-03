import { Request, Response } from 'express';
import { CreateComplimentService } from '@services/compliments/CreateComplimentService';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class CreateComplimentController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const createComplimentService = new CreateComplimentService();
    const { userSenderId, userReceiverId, tagId, message } = request.body;

    await createComplimentService.execute({
      userSenderId,
      userReceiverId,
      tagId,
      message,
    });

    const responseParams: IResponseParams = {
      statusCode: 201,
    };

    return response.status(201).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { CreateComplimentController };
