import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepository';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const usersAlreadyExists = await usersRepositories.findOne({
      email,
    });

    if (!email) {
      throw new Error('Email incorrect');
    }

    if (usersAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = usersRepositories.create({
      name,
      email,
      admin,
    });

    await usersRepositories.save(user);

    return {
      user,
    };
  }

  constructor() {}
}

export { CreateUserService, IUserRequest };
