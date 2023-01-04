import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '@repositories/UsersRepository';

interface IRequestParams {
  id: string;
}

class RemoveUserService {
  async execute({ id }: IRequestParams) {
    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findOne(id);

    if (!userExists) {
      throw new Error('User not exists');
    }

    await usersRepository.delete({
      id,
    });

    return {
      status: true,
    };
  }

  constructor() {}
}

export { RemoveUserService, IRequestParams };
