import { Component, OnInit } from '@angular/core';
import { UserDetailsProxyService } from '../../proxy/user-details-proxy.service';
import { UserDetails } from '../../model/user-details';
import { Router } from '@angular/router';
import { CellData, CellType } from '../table/table.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: UserDetails[];
  headers: string[] = ['Imię', 'Nazwisko', 'Adres Zamieszkania', 'Numer Telefonu', 'Historia Usług'];
  cellData: CellData[] = [{
    path: 'name',
    type: CellType.STRING
  }, {
    path: 'surname',
    type: CellType.STRING
  }, {
    type: CellType.USER_ADDRESS
  }, {
    path: 'phoneNumber',
    type: CellType.STRING
  }, {
    type: CellType.BUTTON,
    buttonLabel: 'Historia Usług',
    disabled: () => false
  }];
  constructor(private userDetailsProxy: UserDetailsProxyService, private router: Router) { }

  ngOnInit() {
    this.userDetailsProxy.getAllUsers().subscribe(data => this.patients = data);
  }

  goToHistory(patient: UserDetails) {
    this.router.navigate(['/history', patient.id]);
  }
}
