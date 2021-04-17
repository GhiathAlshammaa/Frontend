import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, TaskComponent } from './components';

@NgModule({
  declarations: [ListComponent, TaskComponent],
  imports: [CommonModule],
  exports: [ListComponent, TaskComponent],
})
export class TasklistsModule {}
