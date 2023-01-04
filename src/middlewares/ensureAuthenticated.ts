import { Request, Response, NextFunction } from 'express';
import { Response as ResponseHandler, IResponseParams } from '@utils/Response';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  const unauthorized: IResponseParams = {
    statusCode: 401,
  };

  if (!authToken) {
    unauthorized.message = 'Token not found';
    return response.status(401).json(ResponseHandler.set(unauthorized));
  }

  const token =
    authToken.indexOf('Bearer ') !== 1
      ? authToken.replace('Bearer ', '')
      : authToken;

  const { sub: userId } = verify(token, process.env.SECRET_JWT, {}) as IPayload;
  request.userId = userId;

  return next();
}

export { ensureAuthenticated };
