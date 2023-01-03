import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '@utils/HttpStatusCode';
import { Response as ResponseHandler, IResponseParams } from '@utils/Response';

function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const admin = true;

  if (admin) {
    return next();
  }

  const unauthorized: IResponseParams = {
    message: HttpStatusCode.getMessage(401),
    statusCode: 401,
  };

  return response.status(401).json(ResponseHandler.set(unauthorized));
}

export { ensureAdmin };
