import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationRootComponent } from './authentication-root/authentication-root.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {
    path: 'authentication', redirectTo: 'authentication/sign-in', pathMatch: 'full'
  },
  {
    path: 'authentication',
    component: AuthenticationRootComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
