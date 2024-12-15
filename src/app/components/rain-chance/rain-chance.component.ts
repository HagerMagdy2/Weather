import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { ForcastWeekComponent } from '../forcast-week/forcast-week.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { WeatherComponent } from "../weather/weather.component";

@Component({
  selector: 'app-rain-chance',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, ForcastWeekComponent, CarouselComponent, WeatherComponent],
  templateUrl: './rain-chance.component.html',
  styleUrls: ['./rain-chance.component.css'] 

})
export class RainChanceComponent {}