import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FlightinfopayloadService } from '../../shared/services/flightinfopayload.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService, public flightinfopayloadService: FlightinfopayloadService) {}
  ngOnInit(): void {}
  submitData(value: any) {
    let flightinfopayload = {
      airline: value.airline,
      arrivalDate: value.arrivalDate,
      arrivalTime: value.arrivalTime,
      flightNumber: value.flightNumber,
      numOfGuests: value.numOfGuests,
      comments: value.comments,
    }
    this.flightinfopayloadService.postData(flightinfopayload)
      .subscribe(
        result => {
          // Handle result
          console.log(result);
        },
        error => {
          console.log(error);
        },
      );
  }
}