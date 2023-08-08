import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../typings/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected http: HttpClient,
  ) { }

  consultUser(cpf: string): Observable <User> {
    let params = new HttpParams();
    params = params.append('cpf', cpf);

    let response = this.http.get<User>(`${environment.baseURL}/user`, { params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
    return response;
  }

  consultAccountByUser(cpf: string): Observable <User> {
    let params = new HttpParams();
    params = params.append('cpf', cpf);

    let response = this.http.get<User>(`${environment.baseURL}/accounts`, { params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
    return response;
  }
}
