import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherDateService {
  // getWeather(weatherLocation: string) {
  //   throw new Error('Method not implemented.');
  // }
  // private apiKey = '2616e2c5565cf813cb3594ae4716a8ce';
  // constructor(private http: HttpClient) { }

  // getCurrentWeather(weatherLocation: string): Observable<any> {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;
  //   return this.http.get<any>(url);
  // }
  private apiKey = '2616e2c5565cf813cb3594ae4716a8ce';
  constructor(private http: HttpClient) { }
  getCurrentWeather(latitude: number, longitude: number): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
