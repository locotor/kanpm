import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationRootComponent } from './authentication-root/authentication-root.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    AuthenticationRootComponent,
    RegisterComponent,
    SignInComponent
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
