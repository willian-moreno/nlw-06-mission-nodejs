import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '../repositories/TagsRepository';

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tagAlreadyExists = await tagsRepository.findOne({
      name,
    });

    if (!name) {
      throw new Error('Name incorrect');
    }

    if (tagAlreadyExists) {
      throw new Error('Tag already exists');
    }

    const tag = tagsRepository.create({
      name,
    });

    await tagsRepository.save(tag);

    return {
      tag,
    };
  }

  constructor() {}
}

export { CreateTagService, ITagRequest };
