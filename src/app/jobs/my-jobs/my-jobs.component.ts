import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {
  recommendUrl='../../../job-recommended.json';
  jobsHere=true;
  applied=true;
  Url='http://35.166.70.82/jobs';
  adz=[
    {
      title: "California Startups Advice"
    },
    {
      title: "Chicago Startups Advice"
    }
  ];

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.changeTab('my jobs');
  }

}
