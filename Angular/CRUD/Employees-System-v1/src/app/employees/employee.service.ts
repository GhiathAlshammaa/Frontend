import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'assets/api/employees.json';
  employees: IEmployee[] = [];
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    const result = this.http
      .get<IEmployee[]>(this.employeeUrl)
      .pipe(map((data) => (this.employees = data )));
    return result
  }

  getEmployee(id: number): Observable<IEmployee | undefined> {
    return this.getEmployees().pipe(
      map((eployees: IEmployee[]) => eployees.find((e) => e.id === id))
    );
  }

  onGet () {
    return this.employees
  }

  onAdd(employee: IEmployee) {
    this.getEmployees();
    console.log('employees: ', this.employees);
    this.employees.push(employee);

    console.log('Adding Done');
  }
}
