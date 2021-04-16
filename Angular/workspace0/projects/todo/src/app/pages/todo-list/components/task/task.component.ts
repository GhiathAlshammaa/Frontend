import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Task } from '../../store/list/list.models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  @Input() item: Task;
  @Input() isEditable: boolean;

  @Output() edit = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onEdit(task: Task): void {
    this.edit.emit(task);
  }

  onDelete(id: string): void {
    this.delete.emit(id);
  }
}
