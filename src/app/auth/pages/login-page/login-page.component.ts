import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public authType: number = 0;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.authType = this.route.snapshot.data.authType;
  }
}
