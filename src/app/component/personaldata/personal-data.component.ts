import { Component, OnInit } from '@angular/core';
import { UserDetailsProxyService } from '../../proxy/user-details-proxy.service';
import { UserDetails } from '../../model/user-details';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personaldata',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  userDetails: UserDetails;
  userDetailsForm: FormGroup;
  disableFields = true;

  constructor(private userDetailsProxy: UserDetailsProxyService, private builder: FormBuilder) {
    this.userDetailsForm = this.builder.group({
      name: [{ value: null, disabled: this.disableFields }, Validators.required],
      surname: [{ value: null, disabled: this.disableFields }, Validators.required],
      phoneNumber: [{ value: null, disabled: this.disableFields },
        [Validators.required, Validators.pattern(/^\d{9}$/)]],
      flatNumber: [{ value: null, disabled: this.disableFields }, Validators.required],
      street: [{ value: null, disabled: this.disableFields }, Validators.required],
      city: [{ value: null, disabled: this.disableFields }, Validators.required],
      zipCode: [{ value: null, disabled: this.disableFields }, Validators.required],
      email: [{ value: null, disabled: this.disableFields }, Validators.required],
    });
  }

  ngOnInit() {
    this.userDetailsProxy.getUserByUsername().subscribe(data => {
      this.userDetails = data[0];
      this.userDetailsForm.setValue({
        name: this.userDetails.name,
        surname: this.userDetails.surname,
        phoneNumber: this.userDetails.phoneNumber,
        flatNumber: this.userDetails.flatNumber,
        street: this.userDetails.street,
        city: this.userDetails.city,
        zipCode: this.userDetails.zipCode,
        email: this.userDetails.email,
      });
    });
  }

  editDetails() {
    this.disableFields = false;
    this.enableForm();
  }

  updateDetails() {
    this.disableFields = true;
    this.disableForm();
    const user: UserDetails = {
      id: this.userDetails.id,
      name: this.userDetailsForm.controls['name'].value,
      surname: this.userDetailsForm.controls['surname'].value,
      phoneNumber: this.userDetailsForm.controls['phoneNumber'].value,
      street: this.userDetailsForm.controls['street'].value,
      city: this.userDetailsForm.controls['city'].value,
      zipCode: this.userDetailsForm.controls['zipCode'].value,
      email: this.userDetailsForm.controls['email'].value,
      flatNumber: this.userDetailsForm.controls['flatNumber'].value,
      pesel: this.userDetails.pesel
    };
    this.userDetailsProxy.updateUserDetails(user);
  }

  enableForm() {
    Object.keys(this.userDetailsForm.controls).forEach(key => this.userDetailsForm.controls[key].enable());
  }

  disableForm() {
    Object.keys(this.userDetailsForm.controls).forEach(key => this.userDetailsForm.controls[key].disable());
  }
}
