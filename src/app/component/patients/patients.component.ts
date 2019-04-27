import { Component, OnInit } from '@angular/core';
import { UserDetailsProxyService } from '../../proxy/user-details-proxy.service';
import { UserDetails } from '../../model/user-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: UserDetails[];
  constructor(private userDetailsProxy: UserDetailsProxyService, private router: Router) { }

  ngOnInit() {
    this.userDetailsProxy.getAllUsers().subscribe(data => this.patients = data);
  }

  goToHistory(id: number) {
    this.router.navigate(['/history', id]);
  }
}
