import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {};

  saveGame(game){
    return this._http.post('/api/game', game);
  }

  loadGame(){
    return this._http.get('/api/game')
  }
}
