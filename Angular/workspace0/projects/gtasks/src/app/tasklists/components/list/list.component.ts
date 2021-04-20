import { Component, OnInit } from '@angular/core';
import { DayKind } from '../../../models';
import { TaskList } from '../../../models/task-list';
import { TasklistsService } from '../../service';

const ELEMENT_DATA: TaskList[] = [
  { id: 1, title: 'TodoList', updated: '15.04.2021', kind: DayKind.WORKDAY },
  { id: 2, title: 'TodoList', updated: '16.04.2021', kind: DayKind.WORKDAY },
  { id: 3, title: 'TodoList', updated: '17.04.2021', kind: DayKind.WEEKEND },
  { id: 4, title: 'TodoList', updated: '18.04.2021', kind: DayKind.WEEKEND },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  /**
   * Keep the task lists as an array object
   */
  taskLists: Array<any>;

  /**
   * Keep the title of selected list
   * The value will be pass by task lists component
   */
  selectedList: any;

  displayedColumns: string[] = ['id', 'title', 'updated', 'kind', 'actions'];
  dataSource: TaskList[] = ELEMENT_DATA;

  constructor(private tasksListsService: TasklistsService) {}

  /**
   * Load the tasks and update the list title
   * The list title will pass to tasks component
   * @param list
   */
  selectList(list) {
    this.selectedList = list;
    // this.getTasks(this.selectedList.id);
  }

  /**
   * Get task list and get the first list items if available
   * @param isSignIn is boolean value which returns w
   */
  getTaskLists(): Promise<any> {
    return this.tasksListsService.getTaskLists()?.then((lists) => {
      console.log(`lists: ${lists}`);
      if (lists.length) {
        this.taskLists = lists;
        console.log(`taskLists: ${this.taskLists}`);
        // const firstItem = this.taskLists[0];
        // this.selectList(this.taskLists[0]);
      }
    });
  }

  ngOnInit(): void {
    this.getTaskLists();
  }
}
