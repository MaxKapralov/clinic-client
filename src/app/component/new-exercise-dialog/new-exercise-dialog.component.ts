import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exercise } from '../../model/exercise';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-exercise-dialog',
  templateUrl: './new-exercise-dialog.component.html',
  styleUrls: ['./new-exercise-dialog.component.css']
})
export class NewExerciseDialogComponent implements OnInit {

  newExerciseForm: FormGroup;

  constructor(private builder: FormBuilder, private dialogRef: MatDialogRef<NewExerciseDialogComponent>) {
    this.newExerciseForm = builder.group({
      name: [null, Validators.required],
      weight: [null, Validators.required],
      numOfRep: [null, Validators.required],
      restTimeInSec: [null, Validators.required],
      numOfSeries: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  saveExercise() {
    const exercise: Exercise = {
      name: this.newExerciseForm.get('name').value,
      series: {
        weight: this.newExerciseForm.get('weight').value,
        numOfRep: this.newExerciseForm.get('numOfRep').value,
        restTimeInSec: this.newExerciseForm.get('restTimeInSec').value
      },
      numOfSeries: this.newExerciseForm.get('numOfSeries').value,
      isDone: false
    };
    this.dialogRef.close(exercise);
  }
}
