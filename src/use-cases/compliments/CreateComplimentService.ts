import { getCustomRepository } from 'typeorm';
import { ComplimentsRepository } from '@repositories/ComplimentsRepository';
import { UsersRepository } from '@repositories/UsersRepository';

interface IRequest {
  userSenderId: string;
  userReceiverId: string;
  tagId: string;
  message: string;
}

class CreateComplimentService {
  async execute(params: IRequest) {
    const { complimentsRepository } = await this._validate(params);
    const compliment = complimentsRepository.create(params);

    await complimentsRepository.save(compliment);
  }

  async _validate({ userSenderId, userReceiverId, tagId, message }: IRequest) {
    if (!userSenderId) throw new Error('UserSenderId param is mandatory');
    if (!userReceiverId) throw new Error('UserReceiverId param is mandatory');
    if (!tagId) throw new Error('TagId param is mandatory');
    if (!message) throw new Error('Message param is mandatory');
    if (userSenderId === userReceiverId)
      throw new Error('Is not possible register a compliment to yourself');

    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    const userSenderExists = await usersRepository.findOne({
      id: userSenderId,
    });

    if (!userSenderExists) throw new Error('User sender does not exists');

    const userReceiverExists = await usersRepository.findOne({
      id: userReceiverId,
    });

    if (!userReceiverExists) throw new Error('User receiver does not exists');

    const complimentAlreadyExists = await complimentsRepository.findOne({
      userSenderId,
      userReceiverId,
      tagId,
      message,
    });

    if (complimentAlreadyExists) {
      throw new Error('Compliment register already exists');
    }

    return {
      complimentsRepository,
    };
  }

  constructor() {}
}

export { CreateComplimentService, IRequest };
