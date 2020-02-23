import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SortingBoxComponent } from './components/sorting-box/sorting-box.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoadDataService } from './services/load-data.service';
import { UserActionsService } from './services/user-actions.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SortingBoxComponent,
    LoginBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [LoadDataService, UserActionsService, AuthService],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
