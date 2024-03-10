import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import $ from 'jquery';
import * as bootstrap from 'bootstrap';
import { FormGroup } from '@angular/forms';

import { WeatherApiService } from '../shared/weather-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent implements OnInit{
    weatherApi: any;

  constructor(private weatherApiService: WeatherApiService,private sharedService: SharedService) { }

  ngOnInit() {
    this.weatherApiService.searchWeather.subscribe((location: string) => {
      this.onSearchWeather(location);
    });
  }
  onSearchWeather(location: string) {
    // this.weatherLocation = location;
  }
    @ViewChild('carousel') carousel!: ElementRef;

  ngAfterViewInit() {
    const carousel = this.carousel?.nativeElement;
    if (carousel) {
      const carouselInstance = new bootstrap.Carousel(carousel); // Initialize the Bootstrap carousel
    }
  }

  nextSlide() {
    const carousel = this.carousel?.nativeElement;
    if (carousel) {
      const carouselInstance = new bootstrap.Carousel(carousel);
      carouselInstance.next(); // Use Bootstrap carousel method for transitioning
    }
  }

  prevSlide() {
    const carousel = this.carousel?.nativeElement;
    if (carousel) {
      const carouselInstance = new bootstrap.Carousel(carousel);
      carouselInstance.prev(); // Use Bootstrap carousel method for transitioning
    }
  }

}


//   @ViewChild('carousel') carousel!: ElementRef;

//   ngAfterViewInit() {
//     const carousel = this.carousel?.nativeElement;
//     if (carousel) {
//       const carouselInstance = new bootstrap.Carousel(carousel); // Initialize the Bootstrap carousel
//     }
//   }

//   nextSlide() {
//     const carousel = this.carousel?.nativeElement;
//     if (carousel) {
//       const carouselInstance = new bootstrap.Carousel(carousel);
//       carouselInstance.next(); // Use Bootstrap carousel method for transitioning
//     }
//   }

//   prevSlide() {
//     const carousel = this.carousel?.nativeElement;
//     if (carousel) {
//       const carouselInstance = new bootstrap.Carousel(carousel);
//       carouselInstance.prev(); // Use Bootstrap carousel method for transitioning
//     }
//   }

