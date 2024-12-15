import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CityWeather } from '../../models/icityWeather';
import { ApiWeatherService } from '../../services/api-weather.service';
import { Iforecast } from '../../models/iforecast';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent  implements OnInit {
  cityWeathers: CityWeather[] = [] ; 
  cityWeather: CityWeather | null = null;
  forcast :Iforecast|null = null ;
  citiesWeather: any[] = [];

  
  isCelsius: boolean = true;
  constructor(private apiWeatherService: ApiWeatherService) {} 
  ngOnInit(): void { 
  this.apiWeatherService.getAllCitiesWeather().subscribe((data) => {
    this.citiesWeather = data;
  });
   }
   toggleUnit(): void {
      this.isCelsius = !this.isCelsius; 

   } 
   convertToFahrenheit(celsius: number): number {
      return (celsius * 9 / 5) + 32; }
  }

