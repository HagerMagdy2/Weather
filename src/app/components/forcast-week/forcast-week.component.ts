import { Component, OnInit } from '@angular/core';
import { CityWeather } from '../../models/icityWeather';
import { ApiWeatherService } from '../../services/api-weather.service';
import { CommonModule } from '@angular/common';
import { WeekdayPipe } from '../../pipes/weekday.pipe';

@Component({
  selector: 'app-forcast-week',
  standalone: true,
  imports: [CommonModule,WeekdayPipe],
  templateUrl: './forcast-week.component.html',
  styleUrl: './forcast-week.component.css'
})
export class ForcastWeekComponent implements OnInit {
  cityWeathers: CityWeather[] = [] ; 
  cityWeather: CityWeather | null = null;
  id:number=2;

  constructor(private apiWeatherService: ApiWeatherService) {} 
  ngOnInit(): void { 
   this.apiWeatherService.getWeatherDataByCityId(this.id).subscribe({
     next: (res) => {
       console.log(res)
       this.cityWeather = res
     },
     error(err) {
       console.log(err)
     },
   })
   }
  }
