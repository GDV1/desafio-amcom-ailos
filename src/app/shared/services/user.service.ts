import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { catchError, map } from 'rxjs/operators';
import { User } from '../typings/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected readonly http: HttpClient,
  ) { }

  private _user = new BehaviorSubject<any>(null);
  
  public get user$(): Observable<any> {
    return this._user.asObservable();
  }

  public setCurrentUser(user: any) {
    this._user.next(user);
  }

  consultUser(cpf: any): Observable<any> {
    return this.http.post<any>(`${environment.baseURL}/user`, cpf).pipe(
      map((data: any) => this.setCurrentUser(data)),
      catchError((err) => this.errorHandler(err))
    );
  }

  errorHandler(e: any): Observable<any> {
    return e;
  }
}
