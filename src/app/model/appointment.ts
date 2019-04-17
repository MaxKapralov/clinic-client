import { Entity } from './entity';

export interface Appointment extends Entity {
  doctorName: string;
  appointments: {[key: string]: AppointmentVal[]};
}
export interface AppointmentVal extends Entity {
  term: Date;
  free: boolean;
}
