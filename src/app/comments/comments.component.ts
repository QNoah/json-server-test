import { HttpClient } from '@angular/common/http';
import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnChanges{
  data: Observable<any[]>;
  bigId: string;
  updateSuccess = false;
  update: boolean = false;
  singleData = true;
  constructor(private commentService: CommentsService) {}

  ngOnInit() {
    this.refreshData();
    console.log(this.data);
  }
  ngOnChanges(){
    this.refreshData();
  }

  updateMode(){
    this.update = !this.update;
}
  refreshData() {
      this.data = this.commentService.getAllComments();
  }
//   delete(commentId: number){
//     this.http.delete(`http://localhost:3000/comments/${commentId}`).subscribe(() => {
//     this.refreshData();
//   }, error => {
//     console.log(error);
//   });
// }

// updateComment(commentId: number, updatedText: string) {
//   const existingComment = this.data.find((comment: any) => comment.id === commentId);
//   const updatedComment = { ...existingComment, text: updatedText }; // Update 'text' field while keeping other fields intact
//   this.http.put(`http://localhost:3000/comments/${commentId}`, updatedComment).subscribe(() => {
//     // this.refreshData();
//     this.updateSuccess = true;
//     this.update = false;
//   }, error => {
//     console.error('Error updating comment:', error);
//   });
// }
showAll(id: string){
  this.singleData = false;
  this.bigId = id;
}
}
