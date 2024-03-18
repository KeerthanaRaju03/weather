import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { switchMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeeklyApiService {
  private apiKey = '0eeb384bee344e0db3e162243240703';
  // searchWeather: any;
  constructor(private http: HttpClient, private sharedService: SharedService) { }
  searchWeather: EventEmitter<string> = new EventEmitter<string>();
  getCurrentWeatherByLocation(): Observable<any> {
    return this.sharedService.currentWeatherLocation.pipe(
      switchMap((location: string) =>
        this.getCurrentWeather(location).pipe(
          catchError(error => {
            console.error('Error fetching weather data:', error);
            return EMPTY;
          })
        )
      )
    );
  }
  getCurrentWeather(weatherLocation: string): Observable<any> {
    if (!weatherLocation) {
      console.error('Weather location is empty.');
      return EMPTY;
    }
    // const todayDate = new Date().toISOString().split('T')[0];
    // const endDate = new Date();
    // endDate.setDate(endDate.getDate() + 7);
    // const formattedEndDate = endDate.toISOString().split('T')[0];
    const url = `https://api.weatherapi.com/v1/forecast.json?q=${weatherLocation}&days=7&key=${this.apiKey}`;
    // const url = `https://api.weatherapi.com/v1/history.json?q=${weatherLocation}&dt=${todayDate}&end_dt=${formattedEndDate}&key=${this.apiKey}`;
    console.log('API Request URL:', url);
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Error fetching weather data:', error);
        return EMPTY;
      })
    );
  }
}
