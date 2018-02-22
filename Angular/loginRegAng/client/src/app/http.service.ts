import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { };

  sendNewUser(newUser) {
    console.log(newUser);
    return this._http.post('/register', newUser);
  }
}
