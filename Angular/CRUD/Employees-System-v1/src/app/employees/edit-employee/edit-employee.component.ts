import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  id: any;
  header: string = '';
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    // const param = this.route.snapshot.paramMap.get('id');

    this.id = this.route?.snapshot?.paramMap?.get('id');
    this.header = this.id === 0 ? 'Add Employee' : 'Edit Employee';
    console.log('id: ', +this.id);
  }

  onSubmit(form: NgForm) {
    let employee: IEmployee = {
      id: form.value.id,
      firstName: form.value.firstname,
      lastName: form.value.lastname,
      job: form.value.job,
    };

    this.employeeService.onAdd(employee);
  }
}
