import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent {
  writer: string;
  text: string;

  constructor() {}

  // submitComment() {
  //   const data = {
  //     writer: this.writer,
  //     text: this.text
  //   };
  //   this.dataService.postComment(data).subscribe(response => {
  //     console.log('Response from server:', response);
  //     this.router.navigate(['success'])
  //     // Hier kun je eventuele verdere acties uitvoeren na het ontvangen van een antwoord
  //   },error => {
  //     console.error('Error submitting comment:', error);
  //     // Hier kun je eventuele foutafhandeling doen
  //   });
  // }
}
