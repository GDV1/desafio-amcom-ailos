import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, map } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../typings/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected readonly http: HttpClient,
  ) { }

  consultUser(cpf: string) {
    return this.http.get(`${environment.baseURL}/user` + '/' + cpf)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // getCarById(id: number): Observable<Car> {
  //   return this.httpClient.get<Car>(this.url + '/' + id)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  errorHandler(error: HttpErrorResponse) {
    return error.message;
  }
}
