import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from '../../model/new-user';
import { NewUserService } from '../../service/new-user.service';
import { Router } from '@angular/router';
import { PasswordValidator } from '../../password-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private builder: FormBuilder, private newUserService: NewUserService, private router: Router) {
    this.registrationForm = builder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      pesel: [null, [Validators.required, Validators.pattern(/^\d{11}$/)]],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^\d{9}$/)]],
      flatNumber: [null, Validators.required],
      street: [null, Validators.required],
      city: [null, Validators.required],
      zipCode: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      confirmPassword: [null, Validators.required]
    }, {validator: PasswordValidator.matchPassword});
  }

  ngOnInit() {
  }

  register() {
    const newUser: NewUser = {
      name: this.registrationForm.controls['name'].value,
      surname: this.registrationForm.controls['surname'].value,
      email: this.registrationForm.controls['email'].value,
      phoneNumber: this.registrationForm.controls['phoneNumber'].value,
      flatNumber: this.registrationForm.controls['flatNumber'].value,
      street: this.registrationForm.controls['street'].value,
      city: this.registrationForm.controls['city'].value,
      zipCode: this.registrationForm.controls['zipCode'].value,
      pesel: this.registrationForm.controls['pesel'].value,
      password: this.registrationForm.controls['password'].value,
    };
    this.newUserService.add(newUser).subscribe(() => this.router.navigate([''])); // todo error handler
  }
}
