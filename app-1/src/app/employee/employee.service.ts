import { Injectable } from '@angular/core';
import { API, Auth } from 'aws-amplify';

import { Employee } from './employee.models';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  apiName = 'employeerestapi';
  path = '/employees';

  constructor() { }

  async getEmployees() {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    console.log('Token', token);

    const requestInfo = {
      header: { Authorization: token }
    };

    return API.get(this.apiName, this.path, requestInfo);
  }

  async createEmployee(data: Employee) {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    console.log('Token', token);

    const requestInfo = {
      header: { Authorization: token },
      body: data
    };

    return API.post(this.apiName, this.path, requestInfo);
  }
}
