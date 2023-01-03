import { UsersRepository } from '@repositories/UsersRepository';
import { compare } from 'bcryptjs';
import { sign, Secret } from 'jsonwebtoken';
import { User } from '@entities/User';
import { getCustomRepository } from 'typeorm';
import moment from 'moment';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute(credentials: IAuthenticateRequest) {
    const user = await this._userExists(credentials);
    const { token, expiresIn } = await this._generateToken(
      user,
      process.env.SECRET_JWT
    );

    return {
      token,
      expiresIn,
    };
  }

  async _generateToken({ id, email }: User, secret: Secret) {
    const token = await sign({ email }, secret, {
      subject: id,
      expiresIn: '1d',
    });

    return {
      token,
      expiresIn: moment(new Date()).add(1, 'days').format('lll'),
    };
  }

  async _userExists({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) throw new Error('Invalid credentials');

    const passwordIsValid = await compare(password, user.password);
    if (!passwordIsValid) throw new Error('Invalid credentials');

    return user;
  }

  constructor() {}
}

export { AuthenticateUserService, IAuthenticateRequest };
