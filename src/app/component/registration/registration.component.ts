import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../password-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 registrationForm: FormGroup;
  hidePass = true;
  hideConf = true;
  constructor(private builder: FormBuilder) {
    this.registrationForm = builder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      passwordConfirmation: [null, Validators.required],
      pesel: [null, Validators.required],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^\d{9}$/)]],
      houseNumber: [null, Validators.required],
      flatNumber: [null, Validators.required],
      street: [null, Validators.required],
      city: [null, Validators.required],
      zipCode: [null, Validators.required]
    }, {validator: PasswordValidator.matchPassword});
  }

  ngOnInit() {
  }

  reset() {
    this.registrationForm.reset();
  }
  register() {
  }

}
