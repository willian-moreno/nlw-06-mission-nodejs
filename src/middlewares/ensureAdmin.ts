import { Request, Response, NextFunction } from 'express';
import { Response as ResponseHandler, IResponseParams } from '@utils/Response';
import { UsersRepository } from '@repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { userId } = request;
  const unauthorized: IResponseParams = {
    statusCode: 401,
  };

  if (!userId) {
    unauthorized.message = 'User id not found';
    return response.status(401).json(ResponseHandler.set(unauthorized));
  }

  const usersRepository = getCustomRepository(UsersRepository);
  const { admin } = await usersRepository.findOne({
    id: userId,
  });

  if (!admin) {
    return response.status(401).json(ResponseHandler.set(unauthorized));
  }

  return next();
}

export { ensureAdmin };
