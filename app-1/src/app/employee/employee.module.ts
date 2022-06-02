import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';

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
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
