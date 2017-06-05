import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.css']
})
export class FriendSearchComponent implements OnInit {
  @Output() results = new EventEmitter();

  constructor() { }
  onSubmit(form){
    this.results.emit({ search: form.value });
  }
  inputChange(event){
    if(event.target.value == ''){
      this.results.emit({ search: event.target.value});
    }
  }
  ngOnInit() {
  }

}
