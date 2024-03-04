import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSucceedComponent } from './comment-succeed.component';

describe('CommentSucceedComponent', () => {
  let component: CommentSucceedComponent;
  let fixture: ComponentFixture<CommentSucceedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentSucceedComponent]
    });
    fixture = TestBed.createComponent(CommentSucceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
