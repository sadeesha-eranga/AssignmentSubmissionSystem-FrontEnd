import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const URL = 'http://localhost:8080/api/v1/user/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticateUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(URL, user).pipe(map((result) => {
        if (result) {
          sessionStorage.setItem('logged', 'true');
        }
        return result;
      })
    );
  }

  logout() {
    sessionStorage.removeItem('logged');
    this.router.navigate(['/login']);
  }
}
