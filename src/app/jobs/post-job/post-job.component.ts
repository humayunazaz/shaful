import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  postJob :FormGroup;
  anotherJob = false;
  address;
  options= [ '(cities)'];
  constructor(private appService:AppService, private fb:FormBuilder) {
    this.postJob = fb.group({
      name: ['', Validators.required],
      website: [''],
      title: ['', Validators.required],
      type: [''],
      description: [''],
      location: [''],
      category: [''],
      salary: [''],
      experience: [''],
      durration: [''],
      howApply: ['']
    })

  }
  getAddress(event){
    this.address = event.address_components[0].long_name;
  }
  onSubmit(){
    this.postJob.value.location = this.address;
    let url='http://35.166.70.82/jobs/post';
    this.appService.postJob(url, this.postJob.value).subscribe(
      data => {
        console.log(data);
      }
    )
    this.postJob.reset();
    this.anotherJob = true;
  }
  ngOnInit() {
    this.appService.changeTab('post a job');
    this.anotherJob = false;
  }

}
