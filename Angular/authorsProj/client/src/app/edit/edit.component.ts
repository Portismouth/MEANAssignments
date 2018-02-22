import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Author } from '../author';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { };

  author = new Author();
  editAuthForm = {id: "", firstName: "", lastName: ""}
  errors = [];
  displayErr: Boolean;

  ngOnInit() {
    let id = this._route.params["_value"].id;
    this.getIndyAuthFromService(id);
  }

  submitEditAuth() {
    let observable = this._httpService.updateAuth(this.editAuthForm);
    observable.subscribe(serverResponse => {
      console.log(serverResponse);
      this.goHome();
    });
    this.editAuthForm = { id: this.author.id, firstName: "", lastName: "" }
  }

  getIndyAuthFromService(authId) {
    let observable = this._httpService.getIndyAuth(authId);
    observable.subscribe(author => {
      this.author.id = author["_id"];
      this.author.firstName = author["firstName"];
      this.author.lastName = author["lastName"];
      this.editAuthForm = { id: this.author.id, firstName: "", lastName: "" }
    })
  }

  goHome() {
    this._router.navigate(['/home']);
  }
}
