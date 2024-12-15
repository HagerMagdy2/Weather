import { Component } from '@angular/core';
import { ApiWeatherService } from '../../services/api-weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchQuery = '';
  cityWeather: any;
  errorMessage = '';

  constructor(private apiWeatherService: ApiWeatherService) { }

  onSearch() {
    if (this.searchQuery.trim() === '') {
      this.errorMessage = 'Please enter a valid city name';
      return;
    }
    const formattedCityName = this.searchQuery.trim().toLowerCase().replace(/\s+/g, '%20');


    this.apiWeatherService.getCityIdByName(formattedCityName).subscribe({
    
    next: (res) => {
      this.cityWeather = res
      console.log(this.cityWeather);
    },
    error(err) {
      console.log(err)
    },
  });
  
   }
  }
