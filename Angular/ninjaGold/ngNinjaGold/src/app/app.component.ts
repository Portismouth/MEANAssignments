import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public gold = 0;
  public log = [];

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.gold;
  }

  farmGold(event) {
    let newGold = Math.floor(Math.random() * ((20 - 10) + 1) + 10);
    this.gold += newGold;
    this.log.push("you earned " + newGold + " farm gold!");
  }

  caveGold(event) {
    let newGold = Math.floor(Math.random() * ((10 - 5) + 1) + 5);
    this.gold += newGold;
    this.log.push("you earned " + newGold + " cave gold!");
  }

  houseGold(event) {
    let newGold = Math.floor(Math.random() * ((5 - 2) + 1) + 2);
    this.gold += newGold;
    this.log.push("you earned " + newGold + " house gold!");
  }

  casinoGold(event) {
    let newGold = Math.floor(Math.random() * ((50 - -50) + 1) + -50);
    this.gold += newGold;
    if (newGold < 0) {
      this.log.push("you lost " + newGold + " casino gold...");
    } else {
      this.log.push("you earned " + newGold + " casino gold!");
    }
  }

  saveGame(event) {
    let gameToSave = {
      name: "game" + Date.now(),
      gold: this.gold,
      log: this.log
    }
    console.log(gameToSave);
    this.postGameToService(gameToSave);
  }

  postGameToService(gameToSave) {
    let observable = this._httpService.saveGame(gameToSave);
    observable.subscribe(data => {
      console.log("Got ya!")
    })
  }
}
