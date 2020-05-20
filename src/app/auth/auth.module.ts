import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { environment } from 'src/environments/environment';

const config: AuthServiceConfig = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.authKey)
  }
]);

export function provideConfig(): AuthServiceConfig {
  return config;
}

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  exports: [LoginPageComponent],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
})
export class AuthModule { }
