import { getCustomRepository } from 'typeorm';
import { ComplimentsRepository } from '@repositories/ComplimentsRepository';

interface IRequestParams {
  userReceiverId: string;
}

class FindUserReceiveComplimentsService {
  async execute({ userReceiverId }: IRequestParams) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      userReceiverId,
    });

    return {
      compliments,
    };
  }

  constructor() {}
}

export { FindUserReceiveComplimentsService, IRequestParams };
