import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit, OnDestroy {

  private componentDestroyed: Subject<boolean> = new Subject();
  public userName: string = '';
  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.checkAuthentication();
    this.authService.userLoginObs
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((userName: string) => {
        this.userName = userName;
      });
  }

  public logout(): void {
    this.authService.logout();
  }

  public ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }
}
