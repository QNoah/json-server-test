import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CommentAddComponent } from './comment-add/comment-add.component';

const routes: Routes = [
  { path: 'comments', component: CommentsComponent},
  { path: 'add-comment', component: CommentAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
