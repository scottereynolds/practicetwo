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
    const alertPlaceholder = document.getElementById('alert')
    const appendAlert = (message: any, type: any) => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('');
      if (alertPlaceholder) {
        alertPlaceholder.append(wrapper);
      }
    }
    this.flightinfopayloadService.postData(flightinfopayload)
      .subscribe(
        result => {
          // Handle result
          console.log(result);
          appendAlert('Flight information has been saved.', 'success');
        },
        error => {
          console.log(error);
          appendAlert('Error saving flight information.', 'danger');
        },
      );
  }
}