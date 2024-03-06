import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeimg: any = '/img/hometrain.jpg';

  message: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // let response = this.http.get('http://localhost:8100/user/', {
    //   responseType: 'text',
    // });
    // response.subscribe((data) => console.log(data));
  }
}
