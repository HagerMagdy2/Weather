import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {

  isCelsius: boolean = true;

  toggleUnit() {
    this.isCelsius = !this.isCelsius;
  }
}

