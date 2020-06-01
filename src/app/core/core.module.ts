import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SortingBoxComponent } from './components/sorting-box/sorting-box.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoadDataService } from './services/load-data.service';
import { UserActionsService } from './services/user-actions.service';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { environment } from 'src/environments/environment';

const config: AuthServiceConfig = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.authKey),
  }
]);

export function provideConfig(): AuthServiceConfig {
  return config;
}

@NgModule({
  declarations: [
    HeaderComponent,
    SortingBoxComponent,
    LoginBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    SocialLoginModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    LoadDataService,
    UserActionsService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: AuthServiceConfig, useFactory: provideConfig }
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
