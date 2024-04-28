import { Module } from '@nestjs/common';
import { SentencesModule } from './sentences/sentences.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), SentencesModule],
})
export class AppModule {}
