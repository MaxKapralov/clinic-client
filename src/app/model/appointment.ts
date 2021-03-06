import { Entity } from './entity';
import { UserDetails } from './user-details';
import { Doctor } from './doctor';
import { Service } from './service';

export interface Appointment extends Entity {
  patient: UserDetails;
  doctor: Doctor;
  service: Service;
  term: Date;
  free: boolean;
}
