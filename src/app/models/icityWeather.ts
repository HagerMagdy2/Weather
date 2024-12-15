import { Iforecast } from "./iforecast";

export interface CityWeather {
  id: number; 
  city: string; 
  forecast: [{ 
  date: string,  
  temperatureCelsius: number, 
  temperatureFahrenheit: number, 
  humidity: number 
  }];
}
