export class LocationModel {
  constructor(
    public name: string,
    public region: string,
    public country: string,
    public lat: number,
    public lon: number,
    public tz_id: string,
    public localtime_epoch: string,
    public localtime: string,
  ) {
  }
}
