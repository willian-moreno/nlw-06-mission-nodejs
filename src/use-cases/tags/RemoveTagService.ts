import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '@repositories/TagsRepository';

interface IRequestParams {
  id: string;
}

class RemoveTagService {
  async execute({ id }: IRequestParams) {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tagExists = await tagsRepository.findOne({
      id,
    });

    if (!tagExists) {
      throw new Error('Tag not exists');
    }

    await tagsRepository.delete({
      id,
    });

    return {
      status: true,
    };
  }

  constructor() {}
}

export { RemoveTagService, IRequestParams };
