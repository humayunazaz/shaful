import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'find-date',
  templateUrl: './find-date.component.html',
  styleUrls: ['./find-date.component.css']
})
export class FindDateComponent implements OnInit {

  constructor() { }
  formSubmit(form){
    console.log(JSON.stringify(form.value));
  }
  ngOnInit() {
  }

}
