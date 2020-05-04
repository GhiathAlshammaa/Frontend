import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  WordListComponent,
  WordDetailComponent,
  CreateWordComponent,
  UpdateWordComponent,
  WordRoutingModule
} from './index';


@NgModule({
  declarations: [WordListComponent, WordDetailComponent, CreateWordComponent, UpdateWordComponent],
  imports: [
    CommonModule,
    WordRoutingModule
  ],
})
export class WordModule { }
