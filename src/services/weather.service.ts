import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix = "&units=metric&APPID=168cd120df4cfd599360a1accf779cda";
  //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=168cd120df4cfd599360a1accf779cda

  constructor(private http: HttpClient) { }

  getWeather(city: string){
    return this.http.get(this.baseWeatherURL + 'Toronto,CA' + this.urlSuffix)
      .pipe(catchError(err => {
        if (err.status === 404) {
          console.log(`City ${city} not found`);
          return EMPTY
        }
      })
      );
  }
}
