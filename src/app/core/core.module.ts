import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SortingBoxComponent } from './components/sorting-box/sorting-box.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoadDataService } from './services/load-data.service';
import { UserActionsService } from './services/user-actions.service';
import { ApiInterceptor } from './interceptors/api.interceptor';

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
  ],
  providers: [
    LoadDataService,
    UserActionsService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
