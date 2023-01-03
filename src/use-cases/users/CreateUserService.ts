import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '@repositories/UsersRepository';
import validator from 'validator';
import { hash } from 'bcryptjs';

interface IRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, password, admin = false }: IRequest) {
    if (!name) throw new Error('Name param is mandatory');
    if (!email) throw new Error('Email param is mandatory');
    if (!password) throw new Error('Password param is mandatory');
    if (!validator.isEmail(email)) throw new Error('Incorrect format email');

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const encryptedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: encryptedPassword,
      admin,
    });

    await usersRepository.save(user);
  }

  constructor() {}
}

export { CreateUserService, IRequest };
