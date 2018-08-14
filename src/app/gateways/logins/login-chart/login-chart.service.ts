import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChartData } from './chartData';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandlerService } from '../../../error-handler.service';
import { Login } from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginChartService {

  private newURL = 'http://localhost/cloud_data/gateway_login_chart.php?new=1';
  private URL = 'http://localhost/cloud_data/gateway_login_chart.php';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getLogins(gatewayObject): Observable<ChartData[]> {
    if (gatewayObject ) {
      return this.http.get<ChartData[]>(`${this.URL}?gateway=${gatewayObject.serial}`).pipe(
        retry(3), catchError(this.errorHandler.handleError));
    } else {
      return this.http.get<ChartData[]>(this.URL).pipe(retry(3), catchError(this.errorHandler.handleError));
    }
  }

  getNew(): Observable<Login[]> {
    return this.http.get<Login[]>(this.newURL).pipe(retry(3), catchError(this.errorHandler.handleError));
  }
}
