import { Entity } from './entity';

export interface NewUser extends Entity {
  name: String;
  surname: String;
  email: String;
  phoneNumber: String;
  flatNumber: String;
  street: String;
  city: String;
  zipCode: String;
  pesel: String;
  password: String;
}
