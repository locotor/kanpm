import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DelonMockModule } from '@delon/mock';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './pages/app-routing.module';
import { SharedModule } from './shared/shared.module';

import { environment } from '@env/environment';
import * as MOCKDATA from '../../_mock';
import { httpInterceptorProviders } from 'shared/interceptors';

const MOCKMODULE = !environment.production ? [DelonMockModule.forRoot({ data: MOCKDATA })] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ...MOCKMODULE
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
