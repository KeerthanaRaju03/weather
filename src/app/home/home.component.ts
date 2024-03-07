import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherServiceService } from '../shared/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  weatherLocation: string='';
  weatherData: any;
  searchForm!: FormGroup;
  allData: any[] | undefined;

  constructor(private weatherService: WeatherServiceService) {}
  getWeather() {
    this.weatherService.getCurrentWeather(this.weatherLocation)
      .subscribe(data => {
        this.weatherData = data;
      });
  }
  getFormattedDateAndDay(dt_txt: string): { formattedDate: string; day: string } {
    const date = new Date(dt_txt);
   
    const formattedDate = date.toISOString().split('T')[0];

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];

    return { formattedDate, day };
  }
  getDay(dateString: string): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString.replace(/-/g, '/'));
    return days[date.getDay()];
  }

}
