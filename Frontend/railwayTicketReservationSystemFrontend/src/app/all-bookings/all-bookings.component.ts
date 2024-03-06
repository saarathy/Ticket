import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { RegistrationServieService } from './../registration-servie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.css'],
})
export class AllBookingsComponent implements OnInit {
  bookings: any;
  constructor(
    private service: RegistrationServieService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let response = this.service.getAllBooking();
    response.subscribe((data: any) => (this.bookings = data));
  }

  public deleteTicket(pnr: any) {
    let response = this.service.cancelMyTicket(pnr);
    response.subscribe((data) => console.log(data));
    location.reload();
  }
}
