import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WeatherService } from '../services/weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { ContentService } from '../services/content.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CompanyInc';
  today: number = Date.now();
  weather
  page: Object;
  //private weatherService = new WeatherService(HttpClientModule)
  constructor(private weatherService: WeatherService,
              private contentService: ContentService) {}
  ngOnInit(): void {
    setInterval(() => {
      this.today = Date.now();
      
      // console.log(this.today);
    }, 1000);
    //this.weather = this.weatherService.getWeather('Toronto') 
    this.weatherService.getWeather('Toronto')
    .subscribe(weather => this.weather = weather['main'].temp);
    this.page = this.contentService.pages['home'];
  }
  
}
