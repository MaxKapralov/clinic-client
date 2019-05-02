import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment';
import { AppointmentProxyService } from '../../proxy/appointment-proxy.service';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CellData, CellType } from '../table/table.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  headers = ['Nazwa Usługi', 'Data Realizacji', 'Godzina', 'Lekarz'];
  cellData: CellData[] = [{
    path: 'service.name',
    type: CellType.STRING
  }, {
    path: 'term',
    type: CellType.DAY
  }, {
    path: 'term',
    type: CellType.TIME
  }, {
    path: 'doctor',
    type: CellType.USER
  }];
  history: Appointment[];

  constructor(private appointmentProxy: AppointmentProxyService, private authService: AuthService, private route: ActivatedRoute) {
  }

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
