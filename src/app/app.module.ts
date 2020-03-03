import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DelonMockModule } from '@delon/mock';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { GroupModule } from './pages/group/group.module';

import { environment } from '@env/environment';
import * as MOCKDATA from '../../_mock';
const MOCKMODULE = !environment.production ? [DelonMockModule.forRoot({ data: MOCKDATA })] : [];

console.log(MOCKDATA);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    GroupModule,
    ...MOCKMODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
