import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
    const url = `https://weather-data-67xg.onrender.com/weather/last30days?location=${location}`;
    console.log('API Request URL:', url);
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        alert('Wrong search. Please enter a valid location.');
        console.error('Error fetching weather data:', error);
        return EMPTY;
      })
    );
  }
}

