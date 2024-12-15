import { Component, OnInit } from '@angular/core';
import { CityWeather } from '../../models/icityWeather';
import { ApiWeatherService } from '../../services/api-weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Iforecast } from '../../models/iforecast';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
   cityWeathers: CityWeather[] = [] ; 
   cityWeather: CityWeather | null = null;
   forcast :Iforecast|null = null ;
   
   isCelsius: boolean = true;
   constructor(private apiWeatherService: ApiWeatherService) {} 
   ngOnInit(): void { 
    this.apiWeatherService.getWeatherDataByCityId(1).subscribe({
      next: (res) => {
        console.log(res)
        this.cityWeather = res
      },
      error(err) {
        console.log(err)
      },
    })
    }
    toggleUnit(): void {
       this.isCelsius = !this.isCelsius; 

    } 
    convertToFahrenheit(celsius: number): number {
       return (celsius * 9 / 5) + 32; }
   }
