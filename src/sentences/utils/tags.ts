import {
  SentencesType,
  Tense,
  Aspect,
  ToBe,
  Voice,
} from './../interfaces/sentence.interface';

export const tagsList = [
  SentencesType.Statements,
  SentencesType.Questions,
  SentencesType.Negation,
  Tense.Present,
  Tense.Future,
  Tense.Past,
  Aspect.Simple,
  Aspect.Continues,
  Aspect.Perfect,
  Aspect.PerfectContinues,
  ToBe.ToBe,
  Voice.Active,
  Voice.Passive,
];
