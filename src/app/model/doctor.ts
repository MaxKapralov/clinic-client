import { Entity } from './entity';
import { Appointment } from './appointment';

export interface Doctor extends Entity {
  name: String;
  surname: String;
  appointments: Appointment[];
}
