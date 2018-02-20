import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  };

  getChicago() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=6b34e22a9232515d101279d760ce8799')
  }

  getBurbank() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=burbank&units=imperial&appid=6b34e22a9232515d101279d760ce8799')
  }

  getDallas() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=6b34e22a9232515d101279d760ce8799')
  }

  getDC() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=washington&units=imperial&appid=6b34e22a9232515d101279d760ce8799')
  }

  getSeattle() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=6b34e22a9232515d101279d760ce8799')
  }

  getSanJose() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=san%20jose&units=imperial&appid=6b34e22a9232515d101279d760ce8799')
  }

}
