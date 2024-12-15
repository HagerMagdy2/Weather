import { Component } from '@angular/core';
import { ApiWeatherService } from '../../services/api-weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchQuery='';
  cityWeather: any;
  errorMessage = '';
  private subscription: Subscription | null = null;
  constructor(private apiWeatherService: ApiWeatherService) { }

  onSearch() {
    if (!this.searchQuery) {
      this.errorMessage = 'Please enter a city name';
      return;
    }

    this.subscription?.unsubscribe();
    this.subscription = this.apiWeatherService
      .getCityWeatherByName(this.searchQuery)
      .subscribe({
        next: (data) => {
          if (data) {
            this.cityWeather = data;
            this.errorMessage = '';
          } else {
            this.cityWeather = null;
            this.errorMessage = `City "${this.searchQuery}" not found`;
          }
        },
        error: (error) => {
          this.cityWeather = null;
          this.errorMessage = `Error fetching weather: ${error.message}`;
          console.error('Weather fetch error', error);
        }
      });
  
  }
  }
