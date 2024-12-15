import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() city: string = ''; @Input() temperature: number = 0; @Input() humidity: number = 0; @Input() windSpeed: number = 0; @Input() weatherIcon: string = ''; @Input() windDirection: string = ''; // New input
   @Input() weatherDescription: string = '';
}