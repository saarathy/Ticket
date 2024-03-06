import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { RegistrationServieService } from './../registration-servie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-search-train',
  templateUrl: './admin-search-train.component.html',
  styleUrls: ['./admin-search-train.component.css'],
})
export class AdminSearchTrainComponent implements OnInit {
  trains: any;
  source: any;
  destination: any;
  constructor(
    private service: RegistrationServieService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let response = this.service.adminSearchTrain();
    response.subscribe((data: any) => (this.trains = data));
  }

  searchTrain(source: any, destination: any) {
    let response = this.service.searchTrainByFromAndTo(source, destination);
    response.subscribe((data) => (this.trains = data));
    console.log(this.trains);
  }

  reset() {
    let response = this.service.getAllTrains();
    response.subscribe((data) => (this.trains = data));
  }

  deleteTrain(trainId: any) {
    let response = this.service.deleteTrain(trainId);
    response.subscribe((data) => console.log(data));
    location.reload();
  }
}
