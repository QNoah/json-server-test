import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit{
  data: any;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.http.get('http://localhost:3000/comments').subscribe((data) => {
      this.data = data;
    });
  }
  delete(commentId: number){
    this.http.delete(`http://localhost:3000/comments/${commentId}`).subscribe();
    this.refreshData();
  }
}
