import { getCustomRepository } from 'typeorm';
import { ComplimentsRepository } from '@repositories/ComplimentsRepository';

interface IRequestParams {
  userSenderId: string;
}

class FindUserSendComplimentsService {
  async execute({ userSenderId }: IRequestParams) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      userSenderId,
    });

    return {
      compliments,
    };
  }

  constructor() {}
}

export { FindUserSendComplimentsService, IRequestParams };
