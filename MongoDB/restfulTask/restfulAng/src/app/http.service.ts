import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
  }

  getTasks() {
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/api/task');
  }

  create(task) {
    return this._http.post('/api/task', task);
  }

  update(task) {
    return this._http.put('/api/task/' + task.id, task);
  }

  destroy(taskId) {
    console.log('/api/task/' + taskId);
    console.log(this._http.delete('/api/task/' + taskId))
    return this._http.delete('/api/task/' + taskId);
  }
}
