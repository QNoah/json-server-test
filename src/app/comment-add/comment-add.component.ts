import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent {
  writer: string;
  comment: string;

  constructor(private dataService: DataService) {}

  submitComment() {
    const data = {
      writer: this.writer,
      comment: this.comment
    };
    this.dataService.postComment(data).subscribe(response => {
      console.log('Response from server:', response);
      // Hier kun je eventuele verdere acties uitvoeren na het ontvangen van een antwoord
    },error => {
      console.error('Error submitting comment:', error);
      // Hier kun je eventuele foutafhandeling doen
    });
  }
}
