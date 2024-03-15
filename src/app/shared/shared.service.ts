import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  locationData='';
  private weatherLocationSource = new BehaviorSubject<string>('');
  currentWeatherLocation = this.weatherLocationSource.asObservable();
  updateWeatherLocation(location: string) {
    console.log('Updating weather location:', location);
    // this.locationData=location;
    this.weatherLocationSource.next(location);
    // console.log(this.locationData);
  }
  constructor(){}
  getSharedData(location: string): void {
    this.locationData = location;
    this.weatherLocationSource.next(location);
  }
}
