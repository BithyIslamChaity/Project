import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  apiUrl = "http://192.168.0.219:8080/teachers";
  constructor(private http: HttpClient) { }

  getTeachers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  addTeacher(teacher: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, teacher);
  }
  updateTeacher(teacher: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${teacher.id}`, teacher);
  }
  deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
