import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  admin: any;
  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public isLoggedIn() {
    // console.log(this.userAuthService.isLoggedIn());
    return this.userAuthService.isLoggedIn();
  }

  public getUser() {
    // console.log(this.userAuthService.getUser().role);
    return this.userAuthService.getUser();
  }

  public logout() {
    this.router.navigate(['/home']);
    return this.userAuthService.clear();
  }
}
