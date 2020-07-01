import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationRootComponent } from './authentication-root/authentication-root.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AuthenticationRootComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule
  ],
  exports: [
    AuthenticationRootComponent,
    RegisterComponent
  ]
})
export class AuthenticationModule { }
