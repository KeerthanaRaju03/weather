import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MonthlyApiService } from '../shared/monthly-api.service';
import { SharedService } from '../shared/shared.service';
import { MonthlyApiData } from '../shared/monthly-api';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss'],
})
export class MonthlyComponent implements OnChanges, OnInit {
  @Input() locationData: any;
  monthlyData: any[] = [];
  isLoading: boolean = true;
  isError: boolean = false;
  errorMessage: string = '';
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  constructor(private monthlyApiService: MonthlyApiService, private sharedService: SharedService,private datePipe: DatePipe) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['locationData'] && !changes['locationData'].firstChange) {
      console.log('Location Data:', this.locationData);
      if (this.locationData) {
        this.getMonthlyData();
      }
    }
  }
  ngOnInit() {
    this.sharedService.currentWeatherLocation.subscribe((location) => {
      if (location) {
        this.locationData = location;
        this.getMonthlyData();
      }
    });
  }
  getMonthlyData() {
    this.isLoading = true;
    this.isError = false;
    this.errorMessage = '';
    console.log('Getting monthly data for location:', this.locationData);
    if (this.locationData) {
      this.monthlyApiService.getCurrentWeatherByLocation(this.locationData).subscribe(
        (data) => {
          console.log('API Response for data:', data);
          if (data && data.length > 0) {
            this.monthlyData = data
            console.log('monthlyData',this.monthlyData)
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
  getDayOfWeek(date: string): string {
    const formattedDate = new Date(date);
    return this.datePipe.transform(formattedDate, 'EEE') || ''; 
  }
}
