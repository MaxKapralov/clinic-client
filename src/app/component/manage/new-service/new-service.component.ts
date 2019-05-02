import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Service } from '../../../model/service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {

  serviceForm: FormGroup;
  constructor(private builder: FormBuilder, private dialogRef: MatDialogRef<NewServiceComponent>) {
    this.serviceForm = builder.group({
      name: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  addService() {
    const service: Service = {
      name: this.serviceForm.controls['name'].value
    };
    this.dialogRef.close(service);
  }

}
