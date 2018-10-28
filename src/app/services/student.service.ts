import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Student} from '../models/student';
import {Observable} from 'rxjs';

const URL = 'http://localhost:8080/api/v1/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private router: Router) { }

  saveStudent(student: Student): Observable<boolean> {
    return this.http.post<boolean>(URL, student);
  }

  getAllStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(URL);
  }
}
