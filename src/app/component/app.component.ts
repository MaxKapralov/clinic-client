import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatSidenav } from '@angular/material';
import { AuthService, Roles } from '../auth/auth.service';
import { NewExerciseDialogComponent } from './new-exercise-dialog/new-exercise-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  roles = Roles;
  constructor(public authService: AuthService, private dialog: MatDialog) {}
  openSidenav() {
    this.sidenav.toggle();
  }
  addNewExercise() {
    this.sidenav.close();
    this.dialog.open(NewExerciseDialogComponent).afterClosed().subscribe(data => console.log(data));
  }
}
