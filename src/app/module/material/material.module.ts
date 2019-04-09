import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

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
    MatSelectModule
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
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
