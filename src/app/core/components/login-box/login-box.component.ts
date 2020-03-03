import { Component, OnInit } from '@angular/core';
import { LoadDataService } from './../../services/load-data.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {

  constructor(private authService: AuthService, private loadDataService: LoadDataService) { }

  public ngOnInit(): void {
  }

  public logout(): void {
    this.authService.logout();
    for (let prop in this.loadDataService.data) {
      if (this.loadDataService.data.hasOwnProperty(prop)) {
        delete this.loadDataService.data[prop];
      }
    }
  }

}
