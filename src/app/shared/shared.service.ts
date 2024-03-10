import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private weatherLocationSource = new BehaviorSubject<string>('');
  currentWeatherLocation = this.weatherLocationSource.asObservable();

  updateWeatherLocation(location: string) {
    console.log('Updating weather location:', location);
    this.weatherLocationSource.next(location);
  }
}
