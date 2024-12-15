import { Component, OnInit } from '@angular/core';
import { CityWeather } from './models/icityWeather';
import { ApiWeatherService } from './services/api-weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RainChanceComponent } from './components/rain-chance/rain-chance.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, CommonModule, RainChanceComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
 { cityWeather: CityWeather | null = null; 
  isCelsius: boolean = true;
   constructor(private apiWeatherService: ApiWeatherService) {}
    ngOnInit(): void { this.apiWeatherService.getWeatherDataByCityId(2).subscribe({
       next: (res) => { console.log(res); this.cityWeather = res; }, error: (err) => { 
        console.log(err); } }); } 

  toggleUnit(): void { 
    this.isCelsius = !this.isCelsius;

   } 
  convertToFahrenheit(celsius: number): number { 
    return (celsius * 9/5) + 32; 
  }
}
