import { getCustomRepository } from 'typeorm';
import { ComplimentsRepository } from '@repositories/ComplimentsRepository';

interface IRequestParams {
  id?: string;
}

class FindComplimentService {
  async execute({ id }: IRequestParams) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    let compliments;
    if (id) {
      compliments = await complimentsRepository.findOne({
        id,
      });
    } else {
      compliments = await complimentsRepository.find();
    }

    return {
      compliments,
    };
  }

  constructor() {}
}

export { FindComplimentService, IRequestParams };
