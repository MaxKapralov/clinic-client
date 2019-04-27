import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment';
import { AppointmentProxyService } from '../../proxy/appointment-proxy.service';
import { AuthService } from '../../auth/auth.service';
import * as utils from '../../Utils';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: Appointment[];
  utils = utils;
  constructor(private appointmentProxy: AppointmentProxyService, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log(id);
      this.appointmentProxy.getHistoryForPatient(+id).subscribe(data => this.history = data);
    } else {
      this.appointmentProxy.getHistory(this.authService.getUsername()).subscribe(data => this.history = data);
    }
  }

}
