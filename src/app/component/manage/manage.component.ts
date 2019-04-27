import { Component, OnInit } from '@angular/core';
import { ServiceProxyService } from '../../proxy/service-proxy.service';
import { Service } from '../../model/service';
import { MatDialog } from '@angular/material';
import { NewServiceComponent } from './new-service/new-service.component';
import { DoctorProxyService } from '../../proxy/doctor-proxy.service';
import { Doctor } from '../../model/doctor';
import { forkJoin } from 'rxjs';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  services: Service[];
  doctors: Doctor[];

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

  deleteService(id: number) {
    this.servicesProxy.deleteService(id).subscribe(() => this.loadEntities());
  }

  addNewService() {
    this.dialog.open(NewServiceComponent).afterClosed().subscribe(data => {
      this.servicesProxy.addService(data).subscribe(() => this.loadEntities());
    });
  }

  deleteDoctor(id: number) {
    this.doctorProxy.deleteDoctor(id).subscribe(() => this.loadEntities());
  }

  addNewDoctor() {
    this.dialog.open(NewDoctorComponent).afterClosed().subscribe(data => {
      this.doctorProxy.addDoctor(data).subscribe(() => this.loadEntities());
    });
  }
}
