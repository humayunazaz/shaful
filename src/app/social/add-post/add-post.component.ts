import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Output() newPost=new EventEmitter();
  post: FormGroup;

  constructor(private fb:FormBuilder) {
    this.post = fb.group({
      text: ['', Validators.required]
    })
  }
  onSubmit(){
    this.newPost.emit({update: this.post.value.text});
    this.post.reset();
  }
  ngOnInit() {
  }

}
