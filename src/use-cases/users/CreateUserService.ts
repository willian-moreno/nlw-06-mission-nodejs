import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../../repositories/UsersRepository';
import validator from 'validator';

interface IRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IRequest) {
    if (!name) {
      throw new Error('Name param is mandatory');
    }

    if (!email) {
      throw new Error('Email param is mandatory');
    }

    if (!validator.isEmail(email)) {
      throw new Error('Incorrect format email');
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

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

export { CreateUserService, IRequest };
