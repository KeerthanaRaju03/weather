import { Component, OnInit } from '@angular/core';
import { WeatherDateService } from '../shared/weather-date.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  latitude: number | undefined;
  longitude: number | undefined;
  locationError: string | undefined;
  locationName: string | undefined;
  weatherData: any | undefined;
  temperatureCelsius: number | undefined;
  temperatureFahrenheit: number | undefined;
  dataCalculationTime: string | undefined;
  showLocationData: boolean = false;
  constructor(private weatherService: WeatherDateService) { }
  ngOnInit(): void {
    this.getCurrentLocation();
  }
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.locationError = undefined;
          this.reverseGeocode(this.latitude, this.longitude);
          this.getWeatherData(this.latitude, this.longitude);
          this.showLocationData = true;
        },
        (error) => {
          this.locationError = 'Error getting location: ' + error.message;
        }
      );
    } else {
      this.locationError = 'Geolocation is not supported by this browser.';
    }
  }
  reverseGeocode(latitude: number, longitude: number) {
  }
  getWeatherData(lat: number, lon: number) {
    console.log(lat, lon);
    this.weatherService.getCurrentWeather(lat, lon).subscribe(
      (data) => {
        this.weatherData = data;
        const temperatureKelvin = this.weatherData.main.temp;
        this.temperatureCelsius = temperatureKelvin - 273.15;
        this.temperatureFahrenheit = (temperatureKelvin * 9 / 5) - 459.67;
        const timestamp = this.weatherData.dt;
        const date = new Date(timestamp * 1000);
        this.dataCalculationTime = date.toLocaleString();
      },
      (error) => {
        console.error('Error getting weather data:', error);
      }
    );
  }
}



