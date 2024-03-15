import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherApiService } from '../shared/weather-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})

export class HomeComponent {
  weatherLocation: string='';
  weatherApi: any;
  searchForm!: FormGroup;
  allData: any[] | undefined;
  showPageContent: boolean = false;

ngOnInit() {
  this.weatherApiService.searchWeather.subscribe((location: string) => {
    this.onSearchWeather(location);
  });
}
  constructor(private weatherApiService: WeatherApiService,private sharedService: SharedService) {}
  onSearchWeather(location: string) {
    this.weatherLocation = location;
    console.log(this.weatherLocation)
      if (this.weatherLocation.trim() === '') {
        alert('Please enter a search place or enable your current location.');
        return;
    }
      this.weatherApiService.getCurrentWeather(this.weatherLocation)
      .subscribe(
        (data) => {
          this.weatherApi = data;
          this.showPageContent = true;
          console.log('Weather API Response:', this.weatherApi);
          if (!this.weatherApi.list || this.weatherApi.list.length === 0) {
            // alert('Wrong search. Please enter a valid location.');
            return;
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse && error.status === 404) {
            alert('Weather data not found for the specified location. Please enter a valid location.');
          } else {
            console.error('Error getting weather data:', error);
            alert('Wrong search. Please enter a valid location.');
          }
        }
      );
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
    getWeatherIconUrl(iconCode: string): string {
      const iconMapping: { [key: string]: string } = {
        '1000': '//cdn.weatherapi.com/weather/64x64/night/113.png',
        '1003': '//cdn.weatherapi.com/weather/64x64/night/113.png',
      };
      return iconMapping[iconCode] || '//cdn.weatherapi.com/weather/64x64/night/113.png';
    }
  }

  