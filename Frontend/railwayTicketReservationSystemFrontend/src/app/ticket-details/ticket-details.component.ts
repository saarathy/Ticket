import { UserAuthService } from './../user-auth.service';
import { Ticket } from './../ticket';
import { RegistrationServieService } from './../registration-servie.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit {
  ticket: any = new Ticket(0, '', '', '', '', '', '', 0, 0);

  constructor(
    private service: RegistrationServieService,
    private router: Router,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    let responce = this.service.getTicket(
      this.userAuthService.getUser().userEmail
    );
    responce.subscribe((data) => (this.ticket = data));
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
