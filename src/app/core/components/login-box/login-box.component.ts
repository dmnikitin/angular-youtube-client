import { Component, OnInit } from '@angular/core';
import { LoadDataService } from './../../services/load-data.service';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthService as ASLService } from 'angularx-social-login';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public socialService: ASLService,
    private loadDataService: LoadDataService
  ) { }

  public ngOnInit(): void {
  }

  public logout(): void {
    if (this.authService.$isLoggedWithGoogle.value) {
      this.authService.$isLoggedWithGoogle.next(false);
      this.socialService.signOut();
    } else {
      this.authService.logout();
    }
    // window.location.reload();
    // for (let prop in this.loadDataService.data) {
    //   if (this.loadDataService.data.hasOwnProperty(prop)) {
    //     delete this.loadDataService.data[prop];
    //   }
    // }

  }
}
