import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent implements OnInit {
  // latitude: number | undefined;
  // longitude: number | undefined;
  // locationError: string | undefined;

  // constructor() { }

  // ngOnInit(): void {
  //   this.getCurrentLocation();
  // }

  // getCurrentLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         this.latitude = position.coords.latitude;
  //         this.longitude = position.coords.longitude;
  //       },
  //       (error) => {
  //         this.locationError = 'Error getting location: ' + error.message;
  //       }
  //     );
  //   } else {
  //     this.locationError = 'Geolocation is not supported by this browser.';
  //   }
  // }
  latitude: number | undefined;
  longitude: number | undefined;
  locationError: string | undefined;

  constructor() { }

  ngOnInit(): void {
    // Uncomment the following line if you want to get the location immediately on component initialization
    // this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.locationError = undefined; // Clear any previous errors
        },
        (error) => {
          this.locationError = 'Error getting location: ' + error.message;
        }
      );
    } else {
      this.locationError = 'Geolocation is not supported by this browser.';
    }
  }
}
