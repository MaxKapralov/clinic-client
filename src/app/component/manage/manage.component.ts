import { Component, OnInit } from '@angular/core';
import { ServiceProxyService } from '../../proxy/service-proxy.service';
import { Service } from '../../model/service';
import { MatDialog } from '@angular/material';
import { NewServiceComponent } from './new-service/new-service.component';
import { DoctorProxyService } from '../../proxy/doctor-proxy.service';
import { Doctor } from '../../model/doctor';
import { forkJoin } from 'rxjs';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import { CellData, CellType } from '../table/table.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  services: Service[];
  doctors: Doctor[];
  servicesHeaders: string[] = ['Nazwa Usługi', 'Operacje'];
  servicesCellData: CellData[] = [{
    path: 'name',
    type: CellType.STRING
  }, {
    type: CellType.BUTTON,
    buttonLabel: 'Usuń Usługę',
    disabled: () => false
  }];
  doctorsHeaders: string[] = ['Imię', 'Nazwisko', 'Operacje'];
  doctorsCellData: CellData[] = [{
    path: 'name',
    type: CellType.STRING
  }, {
    path: 'surname',
    type: CellType.STRING
  }, {
    type: CellType.BUTTON,
    buttonLabel: 'Usuń Lekarza',
    disabled: () => false
  }];
  constructor(private servicesProxy: ServiceProxyService, private dialog: MatDialog, private doctorProxy: DoctorProxyService) {
  }

  ngOnInit() {
    document.getElementById('servBut').className += ' active';
    document.getElementById('services').style.display = 'block';
    this.loadEntities();
  }

  loadEntities() {
    const $services = this.servicesProxy.getAllServices();
    const $doctors = this.doctorProxy.getAllDoctors();
    forkJoin([$services, $doctors]).subscribe(result => {
      this.services = result[0];
      this.doctors = result[1];
    });
  }

  changeTab(evt, from, to) {
    let i, tablinks;
    document.getElementById(from).style.display = 'none';
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(to).style.display = 'block';
    evt.currentTarget.className += ' active';
  }

  deleteService(service: Service) {
    this.servicesProxy.deleteService(service.id).subscribe(() => this.loadEntities());
  }

  addNewService() {
    this.dialog.open(NewServiceComponent).afterClosed().subscribe(data => {
      this.servicesProxy.addService(data).subscribe(() => this.loadEntities());
    });
  }

  deleteDoctor(doctor: Doctor) {
    this.doctorProxy.deleteDoctor(doctor.id).subscribe(() => this.loadEntities());
  }

  addNewDoctor() {
    this.dialog.open(NewDoctorComponent).afterClosed().subscribe(data => {
      this.doctorProxy.addDoctor(data).subscribe(() => this.loadEntities());
    });
  }
}
