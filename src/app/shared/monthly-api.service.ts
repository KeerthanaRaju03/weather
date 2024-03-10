// import { Injectable, EventEmitter } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { SharedService } from './shared.service';
// import { switchMap, catchError } from 'rxjs/operators';
// import { EMPTY } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MonthlyApiService {
//   constructor(private http: HttpClient, private sharedService: SharedService) { }
//   searchWeather: EventEmitter<string> = new EventEmitter<string>();
//   getCurrentWeatherByLocation(): Observable<any> {
//     return this.sharedService.currentWeatherLocation.pipe(
//       switchMap((location: string) =>
      
//         this.getCurrentWeather(location).pipe(
          
//           catchError(error => {
            
//             console.error('Error fetching weather data:', error);
//             return EMPTY;
//           })
//         )
//       )
//     );
//   }
//   getCurrentWeather(weatherLocation: string): Observable<any> {
//     if (!weatherLocation) {
//       alert('Weather location is empty.');
//       return EMPTY;
//     }
//     const url = `https://weather-data-67xg.onrender.com/weather/last30days?location=${weatherLocation}`;
//     console.log('API Request URL:', url);

//     return this.http.jsonp<any>(url, 'callback').pipe(
//       catchError((error) => {
//         console.error('Error fetching weather data:', error);
//         return EMPTY;
//       })
//     );    
//   }
  
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MonthlyApiService {
  private apiUrl = 'https://weather-data-67xg.onrender.com/weather/last30days';

  constructor(private http: HttpClient) {}

  getCurrentWeatherByLocation(): Observable<any> {
    const location = 'erode';
    const url = `${this.apiUrl}?location=${location}`;
    return this.http.jsonp(url, 'callback').pipe(
      tap(
        (data: any) => console.log('JSONP Success:', data),
        (error: any) => console.error('JSONP Error:', error)
      ),
      catchError((error: any) => {
        console.error('Error fetching weather data:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Response body:', error.error);
        }
        return EMPTY;
      })
    );
  }
  
}
