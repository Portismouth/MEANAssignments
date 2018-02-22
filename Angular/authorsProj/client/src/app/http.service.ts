import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { };

  //Author calls
  getAuthors() {
    return this._http.get('/api/authors');
  }

  getIndyAuth(authId) {
    return this._http.get('/api/author/' + authId);
  }

  createAuth(newAuth) {
    return this._http.post('/api/authors', newAuth);
  }

  updateAuth(auth) {
    return this._http.put('/api/author/' + auth.id, auth);
  }

  destroy(authId) {
    console.log('/api/author/' + authId)
    return this._http.delete('/api/author/' + authId);
  }

  //Quote calls
  createQuote(quote) {
    return this._http.post('/api/quotes/' + quote.authId, quote);
  }

  destroyQuote(info) {
    return this._http.delete('/api/quotes/' + info.quoteId);
  }

}
