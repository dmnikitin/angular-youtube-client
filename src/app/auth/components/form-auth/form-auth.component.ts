import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss']
})
export class FormAuthComponent implements OnInit {

  public authForm: FormGroup;
  public showError: boolean = false;
  @Input() public authType: number;

  constructor(public auth: AuthService, private router: Router, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
    this.auth.checkAuthentication().then((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.router.navigate(['/videos']);
      }
    });
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
      this.auth.login(name, password).subscribe((data) => {
        if (data) {
          this.router.navigate(['/videos']);
        } else {
          this.showError = true;
        }
      });
    } else {
      this.auth.signup(name, password).subscribe((data) => {
        if (!data) {
          this.showError = true;
        } else {
          this.router.navigate(['/login']);
        }
      });
    }
  }

}
