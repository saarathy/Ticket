import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { RegistrationServieService } from './../registration-servie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  bookings: any;

  constructor(
    private service: RegistrationServieService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}
  email: any = this.userAuthService.getUser().userEmail;

  ngOnInit(): void {
    let response = this.service.getMyBooking(this.email);
    response.subscribe((data: any) => (this.bookings = data));
  }

  public cancelTicket(pnr: any) {
    let response = this.service.cancelMyTicket(pnr);
    response.subscribe((data) => console.log(data));
    location.reload();
  }
}
