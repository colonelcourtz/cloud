import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Status } from './status';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandlerService } from '../../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private URL = 'http://localhost/cloud_data/gateway_status.php';
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(this.URL).pipe(retry(3), catchError(this.errorHandler.handleError));
  }

}
