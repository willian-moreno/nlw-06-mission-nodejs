import { Request, Response } from 'express';
import { FindUserSendComplimentsService } from '@services/users/FindUserSendComplimentsService';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class FindUserSendComplimentsController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const findUserSendComplimentsService = new FindUserSendComplimentsService();
    const { userId: userSenderId } = request;
    const compliments = await findUserSendComplimentsService.execute({
      userSenderId,
    });

    const responseParams: IResponseParams = {
      statusCode: 200,
      data: compliments,
    };

    return response.status(200).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { FindUserSendComplimentsController };
