import { Injectable } from '@nestjs/common';

import { SentencesQuery } from './interfaces/sentencesQuery.interface';
import { tagsList } from './utils/tags';
import { Sentence } from './interfaces/sentence.interface';

@Injectable()
export class SentencesService {
  async getSentences(query: SentencesQuery): Promise<Sentence[]> {
    return Promise.resolve([
      {
        id: 1,
        sentence: 'string',
        translations: {
          ru: 'string',
        },
        tags: [],
        ngslIndexes: [],
      },
    ]);
    // const tagsFromQuery = query.tags.split(',');
    // const ngslQuery = {
    //   from: Number(query.ngslFrom),
    //   to: Number(query.ngslTo),
    // };

    // const ngslIndexes = Array.from(Array(ngslQuery.to + 1).keys()).slice(
    //   ngslQuery.from,
    // );

    // const ngslIndexesBefore = Array.from(Array(ngslQuery.from).keys());

    // const ngslIndexesAfter = Array.from(Array(2801 + 1).keys()).slice(
    //   ngslQuery.to + 1,
    // );

    // return this.sentenceModel
    //   .find({
    //     tags: {
    //       $in: tagsFromQuery,
    //       $nin: tagsList.filter((tag) => !tagsFromQuery.includes(tag)),
    //     },
    //     ngslIndexes: {
    //       $in: ngslIndexes,
    //       $nin: [...ngslIndexesBefore, ...ngslIndexesAfter],
    //     },
    //   })
    //   .limit(5)
    //   .exec();
  }
}
