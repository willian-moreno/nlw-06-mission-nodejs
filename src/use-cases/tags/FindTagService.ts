import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '@repositories/TagsRepository';
import { classToPlain } from 'class-transformer';

interface IRequestParams {
  id?: string;
}

class FindTagService {
  async execute({ id }: IRequestParams) {
    const tagsRepository = getCustomRepository(TagsRepository);

    let tags;
    if (id) {
      tags = await tagsRepository.findOne(id);
    } else {
      tags = await tagsRepository.find();
    }

    return {
      tags: classToPlain(tags),
    };
  }

  constructor() {}
}

export { FindTagService, IRequestParams };
