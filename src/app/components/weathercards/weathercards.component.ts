import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiWeatherService } from '../../services/api-weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weathercards',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './weathercards.component.html',
  styleUrl: './weathercards.component.css',
})
export class WeathercardsComponent {
  selectedDate!: Date;
  weatherData: any[] = [];

  constructor(private apiWeatherService: ApiWeatherService) {}

  searchWeatherByDate() {
    this.apiWeatherService.getCityWeatherByDate(this.selectedDate).subscribe(
      (weatherData) => {
        this.weatherData = weatherData.list;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
