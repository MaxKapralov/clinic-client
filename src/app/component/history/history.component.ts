import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment';
import { AppointmentProxyService } from '../../proxy/appointment-proxy.service';
import { AuthService } from '../../auth/auth.service';
import * as utils from '../../Utils';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: Appointment[];
  utils = utils;
  constructor(private appointmentProxy: AppointmentProxyService, private authService: AuthService) { }

  ngOnInit() {
    this.appointmentProxy.getHistory(this.authService.getUsername()).subscribe(data => this.history = data);
  }

}
