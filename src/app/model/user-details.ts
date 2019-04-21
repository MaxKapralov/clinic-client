import { Entity } from './entity';

export interface UserDetails extends Entity {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  flatNumber: string;
  street: string;
  city: string;
  zipCode: string;
  pesel: string;
}
