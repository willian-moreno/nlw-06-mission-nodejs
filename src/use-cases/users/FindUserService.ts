import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '@repositories/UsersRepository';
import { classToPlain } from 'class-transformer';
interface IRequestParams {
  id?: string;
}

class FindUserService {
  async execute({ id }: IRequestParams) {
    const usersRepository = getCustomRepository(UsersRepository);

    let users;
    if (id) {
      users = await usersRepository.findOne(id);
    } else {
      users = await usersRepository.find();
    }

    return {
      users: classToPlain(users),
    };
  }

  constructor() {}
}

export { FindUserService, IRequestParams };
