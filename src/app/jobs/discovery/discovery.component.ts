import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css']
})
export class DiscoveryComponent implements OnInit {
  jobs;
  recommendUrl='../../../job-recommended.json';
  jobsHere=true;
  Url='http://35.166.70.82/jobs';
  adz=[
    {
      title: "California Startups Advice"
    },
    {
      title: "Chicago Startups Advice"
    }
  ]

  constructor(private appService:AppService) { }
  search(value){
    
  }
  
  ngOnInit() {
    this.appService.changeTab('discovery');
  }

}
