import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsGuard implements CanActivate {
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}
  employees: IEmployee[] = [];

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.refailEmployees();
    const id = +route.url[1].path;
    const checkId = this.employees.find((e) => e.id === id) ? true : false;
    this.employees = [];
    if (isNaN(id) || id < 1 || checkId === false) {
      alert('Invalid product Id');
      this.router.navigate(['/employees-list']);
      return false;
    }
    return true;
  }

  refailEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (employees) => (this.employees = employees),
      error: (err) => console.log(err),
    });
  }
}
