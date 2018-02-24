import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MarketplaceService {

  constructor(private _http: HttpClient) { }

  getAllListings(){
    return this._http.get('/api/listing');
  }

  findListingByName(){
    
  }

  createListing(listing){
    console.log(listing);
    return this._http.post('/api/listing', listing);
  }

}
