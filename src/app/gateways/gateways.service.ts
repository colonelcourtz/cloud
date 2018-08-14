import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gateway } from './gateway';
import { retry, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class GatewaysService {

  private URL = 'http://localhost/cloud_data/gateways.php';
  constructor(private http: HttpClient, private errorHandler:ErrorHandlerService) { }

  getGateways(): Observable<Gateway[]> {
      return this.http.get<Gateway[]>(this.URL).pipe(retry(3), catchError(this.errorHandler.handleError));
  }
}
