import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (!name) {
      throw new Error('Name incorrect');
    }

    if (!email) {
      throw new Error('Email incorrect');
    }

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    await usersRepository.save(user);

    return {
      user,
    };
  }

  constructor() {}
}

export { CreateUserService, IUserRequest };
