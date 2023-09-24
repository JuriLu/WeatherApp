import {LocationModel} from "./location.model";
import {CurrentWeatherModel} from "./currentWeather.model";

export class WeatherModel {
  constructor(
    public location:LocationModel,
    public current:CurrentWeatherModel
  ) {
  }
}
