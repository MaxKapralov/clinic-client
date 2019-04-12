import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../component/main/main.component';
import { LoginPageComponent } from '../../component/login-page/login-page.component';
import {RegistrationComponent} from '../../component/registration/registration.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'main', component: MainComponent },
  {path: 'registration', component: RegistrationComponent}
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
