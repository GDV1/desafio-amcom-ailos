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

  private _user = new BehaviorSubject<User>({
    name: '',
    cpf: '',
    situation: ''
  });

  public currentUser = this._user.asObservable();

  public setCurrentUser(user: User) {
    this._user.next(user);
  }

  consultUser(cpf: string): Observable<User> {
    return this.http.post<User>(`${environment.baseURL}/user`, cpf).pipe(
      map((data: User) => this.setCurrentUser(data)),
      catchError((err) => this.errorHandler(err))
    );
  }

  errorHandler(e: any): Observable<any> {
    return e;
  }

  // showMessage(msg: string, isError: boolean = false): void {
  //   this.snackBar.open(msg, '', {
  //     duration: 4000,
  //     horizontalPosition: "center",
  //     verticalPosition: "top",
  //     panelClass: isError ? ['msg-error'] : ['msg-success']
  //   })
  // }
}
