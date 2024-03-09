import { Controller, Get, Query } from '@nestjs/common';
//import { Roles } from '../common/decorators/roles.decorator';
//import { RolesGuard } from '../common/guards/roles.guard';
import { SentencesService } from './sentences.service';
import { Sentence } from './interfaces/sentence.interface';
import { SentencesQuery } from './interfaces/sentencesQuery.interface';

// @UseGuards(RolesGuard)
@Controller('Sentences')
export class SentencesController {
  constructor(private readonly SentencesService: SentencesService) {}

  @Get()
  async getSentences(@Query() query: SentencesQuery): Promise<Sentence[]> {
    return this.SentencesService.getSentences(query);
  }
}
