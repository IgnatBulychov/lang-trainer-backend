import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sentence } from './schemas/sentences.schema';
import { SentencesQuery } from './interfaces/sentencesQuery.interface';
import { tagsList } from './utils/tags';

@Injectable()
export class SentencesService {
  constructor(
    @InjectModel(Sentence.name) private readonly sentenceModel: Model<Sentence>,
  ) {}

  async getSentences(query: SentencesQuery): Promise<Sentence[]> {
    const tagsFromQuery = query.tags.split(',');

    return this.sentenceModel
      .find({
        tags: {
          $in: tagsFromQuery,
          $nin: tagsList.filter((tag) => !tagsFromQuery.includes(tag)),
        },
      })
      .limit(5)
      .exec();
  }
}

// { $elemMatch: { $in: query.tags.split(',') } },
