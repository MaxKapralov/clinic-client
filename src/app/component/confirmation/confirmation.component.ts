import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Appointment } from '../../model/appointment';
import * as utils from '../../Utils';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  utils = utils;
  constructor(@Inject(MAT_DIALOG_DATA) private data: Appointment, private dialogRef: MatDialogRef<ConfirmationComponent>) { }

  ngOnInit() {
  }

  acceptReservation() {
    this.dialogRef.close(true);
  }

}
