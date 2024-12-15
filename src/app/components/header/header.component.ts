import { Component } from '@angular/core';
import { DatePickerComponent } from "../date-picker/date-picker.component";
import { ToggleComponent } from "../toggle/toggle.component";
import { SearchComponent } from '../search/search.component';
import { WeathercardsComponent } from '../weathercards/weathercards.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DatePickerComponent, ToggleComponent,SearchComponent,WeathercardsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
