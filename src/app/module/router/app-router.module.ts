import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../component/main/main.component';
import { LoginPageComponent } from '../../component/login-page/login-page.component';
import { RegistrationComponent } from '../../component/registration/registration.component';
import { ReservationComponent } from '../../component/reservation/reservation.component';
import { PersonalDataComponent } from '../../component/personaldata/personal-data.component';
import { HistoryComponent } from '../../component/history/history.component';
import { ServicesComponent } from '../../component/services/services.component';
import { DoctorsComponent } from '../../component/doctors/doctors.component';
import { PatientsComponent } from '../../component/patients/patients.component';
import { CalendarComponent } from '../../component/calendar/calendar.component';
import { AuthGuardService } from '../../auth/auth-guard.service';
import { Roles } from '../../auth/auth.service';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: MainComponent, canActivate: [AuthGuardService], },
  { path: 'registration', component: RegistrationComponent },
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuardService], data: { expectedRole: Roles.USER } },
  { path: 'personal-data', component: PersonalDataComponent, canActivate: [AuthGuardService], data: { expectedRole: Roles.USER } },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuardService], data: { expectedRole: Roles.USER } },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuardService], data: { expectedRole: Roles.ADMIN } },
  { path: 'doctors', component: DoctorsComponent, canActivate: [AuthGuardService], data: { expectedRole: Roles.ADMIN } },
  { path: 'patients', component: PatientsComponent, canActivate: [AuthGuardService], data: { expectedRole: Roles.ADMIN } },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuardService], data: { expectedRole: Roles.ADMIN } }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule {
}
