import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MonthlyApiService } from '../shared/monthly-api.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss'],
})
export class MonthlyComponent implements OnChanges {
    @Input() locationData: any;
  monthlyData: any[] = [];
  isLoading: boolean = true;
  isError: boolean = false;
  errorMessage: string = '';

  constructor(private monthlyApiService: MonthlyApiService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['locationData'] && !changes['locationData'].firstChange) {
      console.log('Location Data:', this.locationData);
      this.getMonthlyData();
    }
  }
  

  getMonthlyData() {
    this.isLoading = true;
    this.isError = false;
    this.errorMessage = '';
    console.log('Getting monthly data for location:', this.locationData);

    if (this.locationData?.name) {
      this.monthlyApiService.getCurrentWeatherByLocation(this.locationData.name).subscribe(
        (data) => {
          console.log('API Response:', data);

          if (data && data.forecast && data.forecast.forecastday && data.forecast.forecastday.length > 0) {
            this.monthlyData = data.forecast.forecastday;
            this.isLoading = false;
          } else {
            console.error('Invalid API response format. Check the API response structure.');
            this.isError = true;
            this.errorMessage = 'Invalid API response format.';
          }
        },
        (error) => {
          console.error('Error fetching monthly data:', error);
          this.isError = true;
          this.isLoading = false;
          this.errorMessage = 'Error fetching monthly data. Please try again later.';
        }
      );
    } else {
      console.error('locationData or its "name" property is undefined.');
      this.isError = true;
      this.isLoading = false;
      this.errorMessage = 'Location data is missing.';
    }
  }
}
