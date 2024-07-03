import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UserResponse } from '../models/userResponse.model';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.API;
  private httpClient = inject(HttpClient);
  private userLogged = new BehaviorSubject<User | null>(null);
  public user$ = this.userLogged.asObservable();
  constructor() {}

  signup(data: any) {
    return this.httpClient.post(`${this.apiUrl}/register`, data);
  }
  login(data: any) {
    return this.httpClient
      .post<UserResponse>(`${this.apiUrl}/login`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'json',
      })
      .pipe(
        tap((result) => {
          localStorage.setItem('authUser', result.token);
          // this.getUserData().subscribe({
          //   next: (res: any) => {
          //     this.userLogged.next(res as User);
          //   },
          //   error: () => {
          //     this.userLogged.next(null);
          //   },
          // });
        })
      );
  }
  logout() {
    localStorage.removeItem('authUser');
    this.userLogged.next(null);
  }
  isLoggedIn() {
    let authUser, userLogged;
    try {
      userLogged = false;
      authUser = localStorage.getItem('authUser');
      if (authUser !== null) {
        this.getUserData().subscribe({
          next: (res: any) => {
            // console.log('res', res);
            this.userLogged.next(res as User);
            userLogged = true;
          },
          error: () => {
            console.log('da error');
            this.logout();
            this.userLogged.next(null);
            userLogged = false;
          },
        });
      }
    } catch (error) {
      console.log('catch error');
      userLogged = false;
    }
    // console.log('eval authUser !');
    return authUser !== null;
  }
  getUserData() {
    const token = localStorage.getItem('authUser');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(`${this.apiUrl}/user`, { headers });
    // .pipe(
    //   tap((result: any) => {
    //     console.log('result', result);
    //     this.userLogged.next(result);
    //   })
    // );
  }
}
