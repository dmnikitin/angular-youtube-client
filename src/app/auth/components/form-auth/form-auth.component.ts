import { Router } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss']
})
export class FormAuthComponent implements OnInit, OnDestroy {

  private componentDestroyed: Subject<boolean> = new Subject();
  public authForm: FormGroup;
  public showError: boolean = false;
  @Input() public authType: number;

  constructor(public auth: AuthService, private router: Router, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.authForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  public onSubmit(): void {
    const { name, password } = this.authForm.value;
    if (!this.authType) {
      this.auth.login(name, password)
        .pipe(takeUntil(this.componentDestroyed))
        .subscribe((data) => {
          if (!data) {
            this.showError = true;
          } else {
            this.router.navigate(['/videos']);
          }
        });
    } else {
      this.auth.signup(name, password)
        .pipe(takeUntil(this.componentDestroyed))
        .subscribe((data) => {
          if (!data) {
            this.showError = true;
          } else {
            this.router.navigate(['/login']);
          }
        });
    }
  }

  public ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }

}
