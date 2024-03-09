import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SentencesModule } from './sentences/sentences.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    SentencesModule,
  ],
})
export class AppModule {}
