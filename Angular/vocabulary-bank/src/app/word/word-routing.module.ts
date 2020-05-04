import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components important statements
import { CreateWordComponent } from './components/create-word/create-word.component';
import { WordListComponent } from './components/word-list/word-list.component';

const routes: Routes = [
  { path: 'words/add', component: CreateWordComponent },
  { path: 'words', component: WordListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WordRoutingModule { }
