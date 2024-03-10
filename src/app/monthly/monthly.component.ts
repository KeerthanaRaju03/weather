import { Component, OnInit } from '@angular/core';
import { MonthlyApiService } from '../shared/monthly-api.service';
@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss'],

})

export class MonthlyComponent implements OnInit {
  locationData: any;
  monthlyData: any;
  constructor(private monthlyApiService: MonthlyApiService) { }

  ngOnInit() {
    this.getMonthlyData();
  }

  getMonthlyData() {
    this.monthlyApiService.getCurrentWeatherByLocation().subscribe(
      (data) => {
        console.log('Monthly Data:', data);
        console.log('Weather API Response:', data);
        console.log('Location Data:', this.locationData);
        console.log('Monthly Data:', this.monthlyData);
        this.locationData = data.location;
        this.monthlyData = data.forecast.forecastday;

      },
      (error) => {
        console.error('Error fetching monthly data:', error);
      }
    );
  }
}
