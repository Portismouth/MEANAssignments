import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  newAuthForm: any;
  errors = [];
  displayErr: Boolean;

  ngOnInit() {
    this.newAuthForm = { firstName: "", lastName: "" }
  }

  submitNewAuth() {
    let observable = this._httpService.createAuth(this.newAuthForm);
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
    })
    this.newAuthForm = { firstName: "", lastName: "" }
  }

  goHome() {
    this._router.navigate(['/home']);
  }

}
