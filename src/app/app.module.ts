import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { AppRoutingModule } from './/app-routing.module';
import { StatusComponent } from './gateways/status/status.component';
import { LoginsComponent } from './gateways/logins/logins.component';
import { ErrorHandlerService } from './error-handler.service';
import { LoginChartService } from './gateways/logins/login-chart/login-chart.service';
import { LoginChartComponent } from './gateways/logins/login-chart/login-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    GatewaysComponent,
    StatusComponent,
    LoginsComponent,
    LoginChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ErrorHandlerService,
    LoginChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
