import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { AppComponent } from './component/app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './module/material/material.module';
import { AppRouterModule } from './module/router/app-router.module';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { environment } from './environment';
import { TokenStorageService } from './auth/token-storage.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    LoginComponent,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
