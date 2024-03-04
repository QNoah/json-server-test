import { HttpClient } from '@angular/common/http';
import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnChanges{
  data: any;
  update: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.refreshData();
  }
  ngOnChanges(){
    this.refreshData();
  }

  refreshData() {
    this.http.get('http://localhost:3000/comments').subscribe((data) => {
      this.data = data;
    });
  }
  delete(commentId: number){
    this.http.delete(`http://localhost:3000/comments/${commentId}`).subscribe(() => {
    this.refreshData();
  }, error => {
    console.log(error);
  });
}
updateMode(){
  if(this.update === false){
  this.update = true;
} else{
  this.update = false;
}
}
}
