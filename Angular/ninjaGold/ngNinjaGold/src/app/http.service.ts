import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {};

  saveGame(game){
    return this._http.post('/game', game)
  }
}
