import { Request, Response, NextFunction } from 'express';
import {
  Response as ResponseHandler,
  IResponseParams,
} from '../utils/Response';

class Middleware {
  static handler(
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    if (err instanceof Error) {
      const badRequest: IResponseParams = {
        message: err.message,
        status: 'error',
        statusCode: 400,
      };

      return response.status(400).json(ResponseHandler.error(badRequest));
    }

    const internalServerError: IResponseParams = {
      message: 'Internal Server Error',
      status: 'error',
      statusCode: 500,
    };

    return response
      .status(500)
      .json(ResponseHandler.error(internalServerError));
  }

  constructor() {}
}

export { Middleware };
