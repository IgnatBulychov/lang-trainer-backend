import { Module } from '@nestjs/common';
import { SentencesController } from './sentences.controller';
import { SentencesService } from './sentences.service';

@Module({
  imports: [],
  controllers: [SentencesController],
  providers: [SentencesService],
})
export class SentencesModule {}
