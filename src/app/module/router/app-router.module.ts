import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../component/main/main.component';
import { LoginPageComponent } from '../../component/login-page/login-page.component';


const routes: Routes = [{ path: '', component: LoginPageComponent },
  { path: 'main', component: MainComponent },
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
