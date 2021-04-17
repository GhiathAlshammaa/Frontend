import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, TaskComponent } from './components';
import { TasklistsService } from './service';

@NgModule({
  declarations: [ListComponent, TaskComponent],
  imports: [CommonModule],
  providers: [TasklistsService],
  exports: [ListComponent, TaskComponent],
})
export class TasklistsModule {}
