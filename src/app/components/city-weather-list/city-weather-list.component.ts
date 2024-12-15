import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiWeatherService } from '../../services/api-weather.service';
import { CityWeather } from '../../models/icityWeather';

@Component({
  selector: 'app-city-weather-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-weather-list.component.html',
  styleUrl: './city-weather-list.component.css'
})
export class CityWeatherListComponent implements OnInit {
  citiesWeather: CityWeather[] = [] as CityWeather[];
  cityWeathers: CityWeather | null = null; 
  

  constructor(private apiWeatherService: ApiWeatherService) {}

  ngOnInit(): void {
    this.apiWeatherService.getWeatherDataByCityId(2).subscribe({
      next: (res) => {
        console.log(res)
        this.cityWeathers = res
      },
      error(err) {
        console.log(err)
      },
    })
  }
}