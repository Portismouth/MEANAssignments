import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) {
  }

  tasks = [];
  newTask: any;
  editTaskForm: any;
  loadEdit: boolean;

  ngOnInit() {
    this.getTasksFromService();
    this.newTask = { title: "", desc: "" }
  }

  onSubmitNew() {
    let observable = this._httpService.create(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
    })
    this.tasks = [];
    this.getTasksFromService();
    this.newTask = { title: "", desc: "" }
  }

  onSubmitEdit() {
    console.log(this.editTaskForm);
    let observable = this._httpService.update(this.editTaskForm);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
    })
    this.tasks = [];
    this.getTasksFromService();
    this.loadEdit = false;
  }

  editTask(event, task) {
    console.log(task);
    this.loadEdit = true;
    this.editTaskForm = { id: task._id, title: task.title, desc: task.desc }
  }

  deleteTask(event, taskId) {
    console.log(taskId);
    console.log("Click the button");
    let observable = this._httpService.destroy(taskId);
    observable.subscribe(data => {
      console.log(data);
    })
    this.tasks = [];
    this.getTasksFromService();
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got ya!", data);
      for (let task in data) {
        this.tasks.push(data[task]);
      }
      console.log(this.tasks);
    })
  }

  //Keeping for reference
  onButtonClick(event) {
    this.getTasksFromService();
    this.tasks = this.tasks;
  }
}
