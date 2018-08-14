import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewaysComponent } from './gateways/gateways.component';
import { StatusComponent } from './gateways/status/status.component';
import { LoginsComponent } from './gateways/logins/logins.component';
import { LoginChartComponent } from './gateways/logins/login-chart/login-chart.component';

const routes: Routes = [
  { path: 'gateways', component: GatewaysComponent },
  { path: 'gateways/status', component: StatusComponent },
  { path: 'gateways/logins', component: LoginsComponent },
  { path: 'gateways/chart', component: LoginChartComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

