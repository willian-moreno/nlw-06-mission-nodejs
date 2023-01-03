import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../utils/HttpStatusCode';
import {
  Response as ResponseHandler,
  IResponseParams,
} from '../utils/Response';

function exceptions(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof Error) {
    const badRequest: IResponseParams = {
      message: err.message,
      status: HttpStatusCode.getMessage(400),
      statusCode: 400,
    };

    return response.status(400).json(ResponseHandler.set(badRequest));
  }

  const internalServerError: IResponseParams = {
    message: HttpStatusCode.getMessage(500),
    status: HttpStatusCode.getMessage(500),
    statusCode: 500,
  };

  return response.status(500).json(ResponseHandler.set(internalServerError));
}

export { exceptions };
