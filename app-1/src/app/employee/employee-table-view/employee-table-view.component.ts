import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-table-view',
  templateUrl: './employee-table-view.component.html',
  styleUrls: ['./employee-table-view.component.scss']
})
export class EmployeeTableViewComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .then((data) => {
        console.log('LOG ME', data);
      })
      .catch((err) => console.error(err));
  }
}
