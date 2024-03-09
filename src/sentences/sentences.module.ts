import { Module } from '@nestjs/common';
import { SentencesController } from './sentences.controller';
import { SentencesService } from './sentences.service';
import { Sentence, SentenceSchema } from './schemas/sentences.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sentence.name, schema: SentenceSchema },
    ]),
  ],
  controllers: [SentencesController],
  providers: [SentencesService],
})
export class SentencesModule {}
