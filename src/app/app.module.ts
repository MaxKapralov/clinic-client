import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './component/app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './module/material/material.module';
import { AppRouterModule } from './module/router/app-router.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { environment } from './environment';
import { TokenStorageService } from './auth/token-storage.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HeaderComponent } from './component/header/header.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { PersonalDataComponent } from './component/personaldata/personal-data.component';
import { HistoryComponent } from './component/history/history.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { PatientsComponent } from './component/patients/patients.component';
import { DoctorsComponent } from './component/doctors/doctors.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { ManageComponent } from './component/manage/manage.component';
import { NewServiceComponent } from './component/manage/new-service/new-service.component';
import { NewDoctorComponent } from './component/manage/new-doctor/new-doctor.component';
import { TableComponent } from './component/table/table.component';
import { InputComponent } from './component/form-controls/input/input.component';
import { SelectComponent } from './component/form-controls/select/select.component';
import { DatepickerComponent } from './component/form-controls/datepicker/datepicker.component';
import { ButtonComponent } from './component/form-controls/button/button.component';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    FooterComponent,
    RegistrationComponent,
    ReservationComponent,
    PersonalDataComponent,
    HistoryComponent,
    CalendarComponent,
    PatientsComponent,
    DoctorsComponent,
    ConfirmationComponent,
    ManageComponent,
    NewServiceComponent,
    NewDoctorComponent,
    TableComponent,
    InputComponent,
    SelectComponent,
    DatepickerComponent,
    ButtonComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: (tokenStorageService) => ({
          tokenGetter: () => tokenStorageService.getToken(),
          whitelistedDomains: environment.host ? [`${environment.host}:${environment.port}`] : undefined
        }),
        deps: [TokenStorageService]
      }
    })

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
