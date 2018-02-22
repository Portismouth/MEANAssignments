import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  newQuoteForm: any;
  errors = [];
  displayErr: Boolean;

  ngOnInit() {
    console.log()
    this.newQuoteForm = { authId: this._route.params["_value"].userId, text: "" }
  }

  submitNewQuote(){
    let observable = this._httpService.createQuote(this.newQuoteForm);
    observable.subscribe(serverResponse => {
      console.log(serverResponse);
      if (serverResponse["message"] != "success") {
        console.log("error portion")
        for (let error in serverResponse) {
          this.errors.push(serverResponse[error].message);
          this.displayErr = true;
        };
      } else {
        console.log("success portion")
        this.goHome();
      }
    });
    this.newQuoteForm = { authId: this._route.params["_value"].userId, text: "" }
  }

  goHome() {
    this._router.navigate(['/home']);
  }

}
