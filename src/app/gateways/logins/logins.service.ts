import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandlerService } from '../../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  private URL = 'http://localhost/cloud_data/gateway_logins.php';
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getLogins(gatewayObject): Observable<Login[]> {
    if (gatewayObject) {
      return this.http.get<Login[]>(`${this.URL}?gateway=${gatewayObject.serial}`).pipe(
        retry(3), catchError(this.errorHandler.handleError));
    } else {
      return this.http.get<Login[]>(this.URL).pipe(retry(3), catchError(this.errorHandler.handleError));
    }
  }

}
