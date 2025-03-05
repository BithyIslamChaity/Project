import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InforService {
  apiUrl = "http://localhost:8081/infor";  
  constructor(private http: HttpClient) { }

 
  callLocalApi(): Observable<string> {
    let Params = new HttpParams();
      Params =Params.append('aa', 'John');
      Params =Params.append('fatherName', 'Md.Delowar');
     Params =Params.append('bb', 24);  

    return this.http.get(this.apiUrl, { params: Params, responseType: 'text' });
  }
}
