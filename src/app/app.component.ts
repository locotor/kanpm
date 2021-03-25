import { Component, ViewChild, TemplateRef } from '@angular/core';
import { AuthenticationService } from 'core/services/authentication.service';
import { GlobalService } from 'core/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'kanpm';

  constructor(
    public global: GlobalService,
    private authService: AuthenticationService
  ) { }

  logout(): void {
    this.authService.logout().subscribe(resp => {
      this.global.currentUser = null;
    })
  }

}
