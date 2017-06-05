import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css']
})
export class FindJobComponent implements OnInit {
  formValid=false;
  value=false;
  @Output() searchJob = new EventEmitter();
  options= [ '(cities)'];
  address;
  selectOptions=[
    {
      title:"Month",
      value: "month"
    },
    {
      title:"Today",
      value: "today"
    },
    {
      title:"Agenda",
      value: "agenda"
    }
  ]
  constructor() { }
  getAddress(event){
    this.address = event.address_components[0].long_name;
  }
  onSubmit(form){
    form.value.location = this.address;
    this.searchJob.emit({cred : form.value});
  }

  ngOnInit() {
  }

}
