import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { MarketplaceService } from '../marketplace.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _marketplaceService: MarketplaceService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

}
