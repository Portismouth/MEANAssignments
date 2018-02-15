import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MEAN';
  tasks = [];

  constructor(private _httpService: HttpService){
  }
  onButtonClick(event){
    this.getTasksFromService();
    this.tasks = this.tasks;
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got ya!", data);
      for(let task in data){
        this.tasks.push(data[task]);
      }
      console.log(this.tasks);
    })
  }
}
