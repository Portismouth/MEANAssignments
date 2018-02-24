import { Component, OnInit } from '@angular/core';
import { MarketplaceService } from '../marketplace.service';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Listing } from '../listing';

@Component({
  selector: 'app-newlisting',
  templateUrl: './newlisting.component.html',
  styleUrls: ['./newlisting.component.css']
})
export class NewlistingComponent implements OnInit {

  constructor(
    private _marketplaceService: MarketplaceService,
    private _router: Router
  ) { }

  listing = new Listing();
  displayErr: Boolean;
  errors = [];

  ngOnInit() {
  }
  
  submitListing(){
    let observable = this._marketplaceService.createListing(this.listing);
    observable.subscribe(res => {
      if (res["message"] != "success") {
        console.log("error portion")
        for (let error in res) {
          this.errors.push(res[error].message);
          this.displayErr = true;
        };
      } else {
        console.log("success portion")
        this.goHome();
      }
    })
  }
  
  goHome() {
    this._router.navigate(['/home']);
  }
  
}

// this.newListing = new FormGroup({
//   title: new FormControl(this.listing.title, [
//     Validators.required
//   ]),
//   desc: new FormControl(this.listing.desc, [
//     Validators.required,
//     Validators.maxLength(200)
//   ]),
//   price: new FormControl(this.listing.price, [
//     Validators.required,
//     Validators.min(4)
//   ]),
//   location: new FormControl(this.listing.location, [
//     Validators.required,
//   ]),
//   image: new FormControl(this.listing.image, [
//     Validators.required,
//     Validators.pattern(/(https?:\/\/.*\.(?:png|jpg))/i)
//   ])
// })