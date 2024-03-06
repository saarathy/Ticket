import { Router } from '@angular/router';
import { RegistrationServieService } from './../registration-servie.service';
import { Train } from './../train';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css'],
})
export class AddTrainComponent implements OnInit {
  train: any = new Train('', '', '', 0, '', '');
  message: any;

  constructor(
    private service: RegistrationServieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addNewTrain() {
    let response = this.service.addTrain(this.train);
    response.subscribe((data) => (this.message = data));
    // this.router.navigate(['/adminSearchTrain']);
  }
}
