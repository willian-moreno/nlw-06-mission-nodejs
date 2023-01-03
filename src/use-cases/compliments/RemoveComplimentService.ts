import { getCustomRepository } from 'typeorm';
import { ComplimentsRepository } from '@repositories/ComplimentsRepository';

interface IRequestParams {
  id: string;
}

class RemoveComplimentService {
  async execute({ id }: IRequestParams) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const complimentExists = await complimentsRepository.findOne({
      id,
    });

    if (!complimentExists) {
      throw new Error('Compliment not exists');
    }

    await complimentsRepository.delete({
      id,
    });

    return {
      status: true,
    };
  }

  constructor() {}
}

export { RemoveComplimentService, IRequestParams };
