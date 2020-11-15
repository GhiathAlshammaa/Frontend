import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { WelcomePapeComponent } from './welcome-pape/welcome-pape.component';

const routes: Routes = [
  { path: 'home', component: WelcomePapeComponent },
  { path: 'employees-list', component: EmployeesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
