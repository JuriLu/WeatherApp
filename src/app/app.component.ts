import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import { WeatherModel} from "./models/weather.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
  }

  cityName: string = 'Tirana'
  weatherData?: WeatherModel

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = ''
  }

  private getWeatherData(cityName: string):void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response:WeatherModel):void => {
        this.weatherData = response
        console.log(response);
      }
    })
  }
}
