import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'assets/api/employees.json';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployee[]>(this.employeeUrl)
      .pipe
      // tap((data) => console.log('All: ' + JSON.stringify(data)))
      // catchError()
      ();
  }

  getEmployee(id: number): Observable<IEmployee | undefined> {
    return this.getEmployees()
      .pipe(
        map((eployees: IEmployee[]) => eployees.find(e => e.id === id))
      );
  }
}
