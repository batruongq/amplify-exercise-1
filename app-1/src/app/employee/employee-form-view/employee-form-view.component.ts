import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form-view',
  templateUrl: './employee-form-view.component.html',
  styleUrls: ['./employee-form-view.component.scss']
})
export class EmployeeFormViewComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name:  ['', [Validators.required]],
    });
  }

  async save(): Promise<void> {
    try {
      await this.employeeService.createEmployee(this.formGroup.value);
    } catch (err) {
      console.error(err);
    }
  }
}
