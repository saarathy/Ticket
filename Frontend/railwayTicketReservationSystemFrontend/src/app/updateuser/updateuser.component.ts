import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { RegistrationServieService } from './../registration-servie.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css'],
})
export class UpdateuserComponent implements OnInit {
  user: any = new User('', '', '', '');

  constructor(
    private service: RegistrationServieService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  myUserId: any = this.userAuthService.getUser().userId;

  public updateNow() {
    console.log(this.user);
    let response = this.service.updateMe(this.myUserId, this.user);
    response.subscribe((data) => console.log(data));
    this.router.navigate(['/home']);
  }
}
