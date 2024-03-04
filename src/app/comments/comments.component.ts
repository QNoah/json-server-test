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
  updateSuccess = false;
  update: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.refreshData();
  }
  ngOnChanges(){
    this.refreshData();
  }

  updateMode(){
    if(this.update === false){
    this.update = true;
  } else{
    this.update = false;
  }
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

updateComment(commentId: number, updatedText: string) {
  const existingComment = this.data.find((comment: any) => comment.id === commentId);
  const updatedComment = { ...existingComment, text: updatedText }; // Update 'text' field while keeping other fields intact
  this.http.put(`http://localhost:3000/comments/${commentId}`, updatedComment).subscribe(() => {
    // this.refreshData();
    this.updateSuccess = true;
    this.update = false;
  }, error => {
    console.error('Error updating comment:', error);
  });
}

}
