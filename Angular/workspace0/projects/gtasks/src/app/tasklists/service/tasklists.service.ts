import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TaskList } from '../../models';

@Injectable()
export class TasklistsService {
  constructor(private http: HttpClient) {}
  url = 'https://tasks.googleapis.com/tasks/v1/users/@me';
  // getTaskLists : Observable<TaskList []> {
  //   return http
  // }
}
