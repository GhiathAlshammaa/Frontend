import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GapiRef } from '../../core/services/gapi-ref.service';
import { ProgressBarService } from '../../core/services/progress-bar.service';
import { TaskList } from '../../models';

@Injectable()
export class TasklistsService {
  constructor(
    private progressBarService: ProgressBarService,
    private gapiRef: GapiRef
  ) {}

  /**
   * @returns the task lists as promise
   */
  getTaskLists(count: number = 100): Promise<any> {
    this.progressBarService.enqueueTask();

    return this.gapiRef.gapi.client.tasks.tasklists
      .list({
        maxResults: count,
      })
      .then((response) => {
        this.progressBarService.dequeueTask();
        return response.result.items;
      });
  }
}
