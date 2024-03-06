import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegistrationServieService } from './../registration-servie.service';
import { TicketDetails } from './../bookTicket';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css'],
})
export class BookTicketComponent implements OnInit {
  ticket: any = new TicketDetails('', '', '', 0);

  trainId: any;
  @Input() recievedId: any;

  message: any;
  HttpClient: any;

  constructor(
    private service: RegistrationServieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public bookTicket() {
    let response = this.service.ticketBooking(this.trainId, this.ticket);
    response.subscribe((data) => (this.message = data));
    console.log(this.message);
    // this.router.navigate(['/ticketDetails']);
    // if (this.message === 'Booking successful') {
    // }
  }

  public payment() {
    let response = this.service.payAmount();
    response.subscribe((data) => console.log(data));
    // let response = this.HttpClient.get('http://localhost:8090', {
    //   responseType: 'text' as 'json',
    // });
    // response.subscribe((data: any) => console.log(data));
  }
}
