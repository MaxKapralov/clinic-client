import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../component/login/login.component';
import { MainComponent } from '../../component/main/main.component';
import { RegistrationComponent } from '../../component/registration/registration.component';


const routes: Routes = [{ path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'registration', component: RegistrationComponent}
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
