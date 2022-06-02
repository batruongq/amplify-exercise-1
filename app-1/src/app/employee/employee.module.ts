import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmployeeFormViewComponent } from './employee-form-view/employee-form-view.component';
import { EmployeeTableViewComponent } from './employee-table-view/employee-table-view.component';

const routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: EmployeeTableViewComponent
      },
      {
        path: 'create',
        component: EmployeeFormViewComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormViewComponent,
    EmployeeTableViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EmployeeModule { }
