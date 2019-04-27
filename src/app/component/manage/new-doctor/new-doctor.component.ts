import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Doctor } from '../../../model/doctor';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.css']
})
export class NewDoctorComponent implements OnInit {

  doctorForm: FormGroup;
  constructor(private builder: FormBuilder, private dialogRef: MatDialogRef<NewDoctorComponent>) {
    this.doctorForm = builder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  addDoctor() {
    const newDoctor: Doctor = {
      name: this.doctorForm.controls['name'].value,
      surname: this.doctorForm.controls['surname'].value
    };
    this.dialogRef.close(newDoctor);
  }
}
