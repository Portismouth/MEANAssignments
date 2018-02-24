import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Author } from '../author';

@Component({
  selector: 'app-show-quotes',
  templateUrl: './show-quotes.component.html',
  styleUrls: ['./show-quotes.component.css']
})
export class ShowQuotesComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { };

  author = new Author();

  ngOnInit() {
    let id = this._route.params["_value"].userId;
    this.getIndyAuthFromService(id);
  }

  getIndyAuthFromService(authId) {
    let observable = this._httpService.getIndyAuth(authId);
    observable.subscribe(author => {
      this.author.id = author["_id"];
      this.author.firstName = author["firstName"];
      this.author.lastName = author["lastName"];
      this.author.quotes = author["quotes"];
    })
  }

  deleteQuote(event, quoteId, authId){
    let ids = {
      quoteId: quoteId,
      authId: authId
    }
    let observable = this._httpService.destroyQuote(ids);
    observable.subscribe(serverResponse => {
      console.log(serverResponse);
      this.goHome();
    })
  }

  goHome() {
    this._router.navigate(['/home']);
  }
}
