import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AuthComponent } from './auth.component';

const routes = [
  {
    path: '',
    component: AuthComponent
  }
]

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AmplifyAuthenticatorModule
  ]
})
export class AuthModule { }
