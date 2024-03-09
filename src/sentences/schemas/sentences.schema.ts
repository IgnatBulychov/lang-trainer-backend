import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Lang, Tag } from '../interfaces/sentence.interface';
export type SentenceDocument = HydratedDocument<Sentence>;

@Schema()
export class Sentence {
  @Prop()
  id: number;

  @Prop()
  sentence: string;

  @Prop({ type: Map })
  translations: {
    [key in Lang]: string;
  };

  @Prop()
  tags: Array<Tag>;
}

export const SentenceSchema = SchemaFactory.createForClass(Sentence);
