import { Component } from '@angular/core';
import { ToggleComponent } from "../toggle/toggle.component";
import { SearchComponent } from '../search/search.component';
import { WeathercardsComponent } from '../weathercards/weathercards.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToggleComponent,SearchComponent,WeathercardsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
