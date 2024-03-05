import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {}

  getAllComments(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/comments');
  }
  updateComment(commentId: number, updatedText: string, writer: string): Observable<any[]> {
    const updatedComment = { text: updatedText, writer: writer };
    return this.http.put<any[]>(`http://localhost:3000/comments/${commentId}`, updatedComment);
  }
}
