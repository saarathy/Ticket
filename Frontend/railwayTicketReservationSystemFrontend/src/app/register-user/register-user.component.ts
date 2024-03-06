import { HttpClient } from '@angular/common/http';
import { RegistrationServieService } from './../registration-servie.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  user: any = new User('', '', '', '');
  message: any;
  result: any = 'User registration is successfull';

  constructor(
    private service: RegistrationServieService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  public registerNow() {
    // let response = this.http.post(
    //   'http://localhost:8100/user/userRegistration',
    //   {
    //     responseType: 'text' as 'json',
    //   }
    // );
    let response = this.service.userRegistration(this.user);
    response.subscribe((data) => (this.message = data));
  }
}
