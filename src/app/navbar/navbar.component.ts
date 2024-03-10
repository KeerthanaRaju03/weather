import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { WeatherApiService } from '../shared/weather-api.service';
import { WeeklyApiService } from '../shared/weekly-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  weatherLocation: string = '';
  constructor(private sharedService: SharedService, private weatherApiService: WeatherApiService, private weeklyApiService: WeeklyApiService) { }


  getWeather() {
    if (this.weatherLocation.trim() !== '') {
      this.weatherApiService.searchWeather.emit(this.weatherLocation);
      this.sharedService.updateWeatherLocation(this.weatherLocation);
    } else {
      alert('Weather location is empty.');
    }
  }


}
