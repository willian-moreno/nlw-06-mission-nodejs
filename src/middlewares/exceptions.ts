import { Request, Response, NextFunction } from 'express';
import { Response as ResponseHandler, IResponseParams } from '@utils/Response';

function exceptions(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof Error) {
    const badRequest: IResponseParams = {
      message: err.message,
      statusCode: 400,
    };

    return response.status(400).json(ResponseHandler.set(badRequest));
  }

  const internalServerError: IResponseParams = {
    statusCode: 500,
  };

  return response.status(500).json(ResponseHandler.set(internalServerError));
}

export { exceptions };
