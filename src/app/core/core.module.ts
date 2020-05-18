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
<<<<<<< HEAD
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
=======


>>>>>>> a53dff2c20d0dc919591649ddfd7345d2d85b056
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
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
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
