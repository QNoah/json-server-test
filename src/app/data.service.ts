import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  postComment(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/comments', data);
  }
}
