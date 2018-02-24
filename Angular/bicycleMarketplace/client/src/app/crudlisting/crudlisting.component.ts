import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { MarketplaceService } from '../marketplace.service';

@Component({
  selector: 'app-crudlisting',
  templateUrl: './crudlisting.component.html',
  styleUrls: ['./crudlisting.component.css']
})
export class CrudlistingComponent implements OnInit {

  constructor(
    private _marketplaceService: MarketplaceService,
    private _router: Router
  ) { }

  listings = [];

  ngOnInit() {
    this.getAllListingsFromService()
  }

  getAllListingsFromService() {
    let observable = this._marketplaceService.getAllListings();
    observable.subscribe(listings => {
      for (let listing in listings) {
        this.listings.push(listings[listing]);
      }
      console.log(this.listings)
    })
  }

}
