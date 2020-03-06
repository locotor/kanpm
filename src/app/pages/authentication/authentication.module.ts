import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  exports: [
    AuthenticationComponent,
    RegisterComponent
  ]
})
export class AuthenticationModule { }
