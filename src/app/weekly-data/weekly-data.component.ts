import { Component,OnInit } from '@angular/core';
import { WeeklyApiService } from '../shared/weekly-api.service';
@Component({
  selector: 'app-weekly-data',
  templateUrl: './weekly-data.component.html',
  styleUrls: ['./weekly-data.component.scss']
})
export class WeeklyDataComponent implements OnInit {
  weatherData: any; 
  constructor(private weeklyApiService: WeeklyApiService) {}
  ngOnInit() {
    this.weeklyApiService.getCurrentWeatherByLocation().subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.error('Error fetching weekly weather data:', error);
      }
    );
  }
}
