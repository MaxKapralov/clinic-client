import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../component/login/login.component';
import { MainComponent } from '../../component/main/main.component';
import { RegistrationComponent } from '../../component/registration/registration.component';
import { LoginPageComponent } from '../../component/login-page/login-page.component';
import {RegistrationPageComponent} from '../../component/registration-page/registration-page.component';


const routes: Routes = [{ path: '', component: LoginPageComponent },
  { path: 'main', component: MainComponent },
  { path: 'registration', component: RegistrationPageComponent}
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
