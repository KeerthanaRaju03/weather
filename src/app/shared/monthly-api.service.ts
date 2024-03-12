import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { switchMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthlyApiService {
  location!: string;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.sharedService.currentWeatherLocation.subscribe((location) => {
      this.location = location;
      console.log('Location from SharedService:', this.location);
    });
  }
  


  
  getCurrentWeatherByLocation(location: string): Observable<any> {
    // if (!location) {
    //   alert('Location is empty.');
    //   return EMPTY;
    // }
    console.log('hi',this.location)
    const url = `https://weather-data-67xg.onrender.com/weather/last30days?location=${location}`;
    console.log('API Request URL:', url);

    return this.http.jsonp<any>(url, 'callback').pipe(
      catchError((error) => {
        console.error('Error fetching weather data:', error);
        console.error('Invalid API response format. Check the API response structure.');
        return EMPTY;
      })
    );
  }
}

