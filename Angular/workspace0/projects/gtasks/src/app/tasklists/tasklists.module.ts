import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, TaskComponent } from './components';
import { TasklistsService } from './service';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [ListComponent, TaskComponent],
  imports: [CommonModule, MaterialModule],
  providers: [TasklistsService],
  exports: [ListComponent, TaskComponent],
})
export class TasklistsModule {}
