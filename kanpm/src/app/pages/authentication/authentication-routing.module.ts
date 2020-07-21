import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationRootComponent } from './authentication-root/authentication-root.component';


const routes: Routes = [
  { path: 'authentication', component: AuthenticationRootComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
