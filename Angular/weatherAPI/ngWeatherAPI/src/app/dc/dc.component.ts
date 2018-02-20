import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  constructor(private _httpService: HttpService) { };

  currentTemp;
  lowTemp;
  highTemp;

  ngOnInit() {
    this.getWeatherFromService();
  }

  getWeatherFromService() {
    let info = this._httpService.getDC();
    info.subscribe(weather => {
      console.log("Got data from API", weather);
      let main = weather["main"];
      console.log(main.temp)
      this.currentTemp = main.temp;
      this.lowTemp = main.temp_min;
      this.highTemp = main.temp_max;

      // console.log(this.mainWeather);
    });
  }
}
