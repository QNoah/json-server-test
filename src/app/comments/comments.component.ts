import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  data: any;
  constructor(private http: HttpClient){
    this.http.get('http://localhost:3000/comments').subscribe((data) => {
    this.data = data;
    });
  }
}
