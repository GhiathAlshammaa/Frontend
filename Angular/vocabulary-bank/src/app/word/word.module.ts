import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordListComponent } from './components/word-list/word-list.component';
import { WordDetailComponent } from './components/word-detail/word-detail.component';
import { CreateWordComponent } from './components/create-word/create-word.component';
import { UpdateWordComponent } from './components/update-word/update-word.component';
import { WordRoutingModule } from './word-routing.module';



@NgModule({
  declarations: [WordListComponent, WordDetailComponent, CreateWordComponent, UpdateWordComponent],
  imports: [
    CommonModule,
    WordRoutingModule
  ],
})
export class WordModule { }
