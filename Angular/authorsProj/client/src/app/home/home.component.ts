import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  authors = [];

  ngOnInit() {
    this.getAllAuthFromService();
  }

  getAllAuthFromService() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(authors => {
      for (let author in authors) {
        this.authors.push(authors[author]);
      }
      console.log(this.authors);
    })
  }

  deleteAuth(event, authId) {
    //NOTE TO SELF: registering event and auth id, need to call function in service
    let observable = this._httpService.destroy(authId);
    observable.subscribe(serverResponse => {
      console.log(serverResponse);
    });
    this.authors = [];
    this.getAllAuthFromService();
  }

}
