import { Component, OnInit } from '@angular/core';
import { Login } from '../logins/login';
import { LoginsService } from '../logins/logins.service';
import { interval } from 'rxjs/internal/observable/interval';
import { startWith, switchMap } from 'rxjs/operators';
import { GatewaysService } from '../gateways.service';


@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
  title = 'All Gateway';
  logins: Login[];
  chart = [];
  gateways: object;
  value: object;

  constructor(private loginService: LoginsService, private gatewayService: GatewaysService ) { }

  ngOnInit(): void {
    this.getLogins();
    this.getGateways();
  }

  getLogins(): void {
    /*
    interval(5000)
      .pipe(
        startWith(0),
      switchMap(() => this.loginService.getLogins(this.value)))
      .subscribe((logins: Login[]) => {
        this.logins = logins;
      });
      */
     // Get login data
     // Pass serial if available
    this.loginService.getLogins(this.value).subscribe((logins: Login[]) => {
      this.logins = logins;
    });
  }

  getGateways(): void {
    this.gatewayService.getGateways().subscribe(res => {
      this.gateways = res;
      console.log(res[0].serial);
    });
  }


}
