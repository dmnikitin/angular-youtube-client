import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {
  public userName: string = '';
  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.userLoginObs.subscribe((userName: string) => {
      this.userName = userName;
    });
  }

  public logout(): void {
    this.authService.logout();
  }

}
