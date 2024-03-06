import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { RegistrationServieService } from './../registration-servie.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(
    private service: RegistrationServieService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public adminLogin(loginForm: NgForm) {
    this.service.login(loginForm.value).subscribe(
      (data: any) => {
        // console.log(data.jwt);

        this.userAuthService.setUser({ role: 'admin' });
        this.userAuthService.setToken(data.jwt);

        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(loginForm.value);
  }
}
