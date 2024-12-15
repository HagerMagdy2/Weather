import { Component, Input, OnInit } from '@angular/core';
import { CityWeather } from '../../models/icityWeather';
import { ApiWeatherService } from '../../services/api-weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Iforecast } from '../../models/iforecast';
import { TemperatureConvertionPipe } from '../../pipes/temperature-convertion.pipe';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule,CommonModule,TemperatureConvertionPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
   cityWeathers: CityWeather[] = [] ; 
   cityWeather: CityWeather | null = null;
   forcast :Iforecast|null = null ;
   unit:string = 'F';
   
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
    
    convertToFahrenheit(celsius: number) {
      this.isCelsius = !this.isCelsius; 
       return  this.unit = this.unit === 'F'? 'C' : 'F';
       }
   }
