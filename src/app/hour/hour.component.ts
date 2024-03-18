import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../shared/weather-api.service';
@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrl: './hour.component.scss'
})
export class HourComponent  implements OnInit {
  weatherData: any; 
  currentDate: string = '';
  constructor(private weatherApiService: WeatherApiService) {}
  ngOnInit() {
    this.weatherApiService.searchWeather.subscribe((location: string) => {
      this.fetchHourlyWeather(location);
    });
    this.setCurrentDate();
  }
  fetchHourlyWeather(location: string) {
    this.weatherApiService.getCurrentWeather(location).subscribe((data: any) => {
      this.weatherData = data.forecast.forecastday[0].hour;
    });
  }
  setCurrentDate() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    this.currentDate = today.toLocaleDateString('en-US', options);
  }
}
