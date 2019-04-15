import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../component/main/main.component';
import { LoginPageComponent } from '../../component/login-page/login-page.component';
import {RegistrationComponent} from '../../component/registration/registration.component';
import {ReservationComponent} from '../../component/reservation/reservation.component';
import {PersonalDataComponent} from '../../component/personaldata/personal-data.component';
import {HistoryComponent} from '../../component/history/history.component';
import {ServicesComponent} from '../../component/services/services.component';
import {DoctorsComponent} from '../../component/doctors/doctors.component';
import {PatientsComponent} from '../../component/patients/patients.component';
import {CalendarComponent} from '../../component/calendar/calendar.component';



const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'main', component: MainComponent },
  {path: 'registration', component: RegistrationComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'personal-data', component: PersonalDataComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'doctors', component: DoctorsComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'calendar', component: CalendarComponent}
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
