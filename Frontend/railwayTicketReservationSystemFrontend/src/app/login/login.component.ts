import { UserAuthService } from './../user-auth.service';
import { RegistrationServieService } from './../registration-servie.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // login:any = new Login("","");

  authRequest: any = {
    username: 'dhaaneshwar@gmail.com',
    password: 'abc',
  };

  constructor(
    private service: RegistrationServieService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public login(loginForm: NgForm) {
    this.service.login(loginForm.value).subscribe(
      (data: any) => {
        console.log(data.jwt);

        this.userAuthService.setUser(data.registerUser);
        this.userAuthService.setToken(data.jwt);

        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(loginForm.value);
  }

  // public signIn(){
  //   console.log(this.login.username);
  //   this.getAccessToken(this.authRequest);
  // }

  // public getAccessToken(authRequest:any){
  //   let response=this.service.generateToken(authRequest);
  //   response.subscribe(data=>console.log(data));
  // }
}
