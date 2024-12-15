import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { CityWeather } from '../models/icityWeather';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {
  // private apiUrl = 'http://localhost:4454/';
   constructor(private httpClient: HttpClient,) {}
   getWeatherData(): Observable<CityWeather[]> { 
    return this.httpClient.get<CityWeather[]>(`${environment.baseUrl}/forecast`).pipe(catchError(error => {
     console.error('Error fetching weather data:', error); throw error; 
    })
  );
    }
    getWeatherDataByCityId( cityId: number): Observable<CityWeather> { 
      return this.httpClient.get<CityWeather>(`${environment.baseUrl}/cityForecast/${cityId}`)
      }
      getAllCitiesWeather(): Observable<any[]> {
        return this.httpClient.get<any[]>(`${environment.baseUrl}/forecast`);
      }
    
      getCityWeather(cityId: string): Observable<any> {
        return this.httpClient.get<any>(`${environment.baseUrl}/cityForecast/${cityId}`);
      }
      getCityWeatherByName(cityName: string): Observable<any | undefined> {
        return this.getAllCitiesWeather().pipe(
          map((citiesWeather: any[]) => {
          //  console.log('All cities:', citiesWeather); 
            console.log('Searching for:', cityName); 
      
            const foundCity = citiesWeather.find(city => 
              city.name && 
              city.name.toLowerCase().trim() === cityName.toLowerCase().trim()
            );
      
            console.log('Found city:', foundCity);
            return foundCity;
          })
        );
      }
      getCityWeatherByDate(date: Date): Observable<any> {
        let searchString = new HttpParams();
        searchString = searchString.append('date', this.formatDate(date));
    
        return this.httpClient.get<any>(`${environment.baseUrl}/forecast`, {
          params: searchString
        });
      }
    
      private formatDate(date: Date): string {
        return date.toISOString().slice(0, 10);
      }
      private handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
        
          errorMessage = `Error: ${error.error.message}`;
        } else {

          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(error);
      }
    
}
