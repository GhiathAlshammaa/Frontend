import { Component, OnInit } from '@angular/core';
import { DayKind } from '../../../models';
import { TaskList } from '../../../models/task-list';

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
  displayedColumns: string[] = ['id', 'title', 'updated', 'kind', 'actions'];
  dataSource: TaskList[] = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
