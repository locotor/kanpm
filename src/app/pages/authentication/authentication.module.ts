import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationRootComponent } from './authentication-root/authentication-root.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AuthenticationRootComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  exports: [
    AuthenticationRootComponent,
    RegisterComponent
  ]
})
export class AuthenticationModule { }
