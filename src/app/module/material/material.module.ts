import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { ConfirmationComponent } from '../../component/confirmation/confirmation.component';
import { NewServiceComponent } from '../../component/manage/new-service/new-service.component';
import { NewDoctorComponent } from '../../component/manage/new-doctor/new-doctor.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [],
  entryComponents: [
    ConfirmationComponent,
    NewServiceComponent,
    NewDoctorComponent
  ]
})
export class MaterialModule { }
