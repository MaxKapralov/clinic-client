import { Entity } from './entity';
import { Series } from './series';

export interface Exercise extends Entity {
  name: string;
  series: Series;
  numOfSeries: number;
  isDone: boolean;
  userId?: string;
}
