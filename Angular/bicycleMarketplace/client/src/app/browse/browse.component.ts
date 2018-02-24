import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { MarketplaceService } from '../marketplace.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(
    private _marketplaceService: MarketplaceService,
    private _router: Router
  ) { }

  listings = [];
  search = "";

  ngOnInit() {
    this.getAllListingsFromService()
  }

  onKey(event: KeyboardEvent) {
    if (event.key.match(/^ [a - zA - Z] + $/)) {

      this.search += event.key;
    }
    console.log(this.search)
  }

  getAllListingsFromService() {
    let observable = this._marketplaceService.getAllListings();
    observable.subscribe(listings => {
      for (let listing in listings) {
        this.listings.push(listings[listing]);
      }
    })
  }

}
