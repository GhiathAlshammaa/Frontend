import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Component import Statements
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { WordListComponent } from './word/components/word-list/word-list.component';
// import { CreateWordComponent } from './word/components/create-word/create-word.component';

const routes: Routes = [
  // { path: 'add', component: CreateWordComponent },
  // { path: 'view', component: WordListComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
