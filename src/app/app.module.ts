import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { FormsModule } from '@angular/forms';
import { CommentSucceedComponent } from './comment-succeed/comment-succeed.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentAddComponent,
    CommentSucceedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
