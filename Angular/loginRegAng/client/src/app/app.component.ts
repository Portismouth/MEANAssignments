import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) { };

  registerForm: any;

  ngOnInit() {
    this.registerForm = {
      email: "",
      firstName: "",
      lastName: "",
      birthday: "",
      password: "",
      passwordConf: ""
    }
  }

  registerNewUser() {
    this._httpService.sendNewUser(this.registerForm);
  }
}
