import { Request, Response } from 'express';
import { FindUserReceiveComplimentsService } from '@services/users/FindUserReceiveComplimentsService';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class FindUserReceiveComplimentsController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const findUserReceiveComplimentsService =
      new FindUserReceiveComplimentsService();
    const { userId: userReceiverId } = request;
    console.log('userReceiverId', userReceiverId);
    const compliments = await findUserReceiveComplimentsService.execute({
      userReceiverId,
    });

    const responseParams: IResponseParams = {
      statusCode: 200,
      data: compliments,
    };

    return response.status(200).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { FindUserReceiveComplimentsController };
