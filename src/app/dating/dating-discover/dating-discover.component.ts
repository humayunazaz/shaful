import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-dating-discover',
  templateUrl: './dating-discover.component.html',
  styleUrls: ['./dating-discover.component.css']
})
export class DatingDiscoverComponent implements OnInit {

  constructor(private appService:AppService) { }
  recUrl="../../../datingRecommend.json";
  dating=true;
  url = "../../../../dating.json";
  adz=[
    {
      title: "India Startups Advice"
    },
    {
      title: "Pakistan Startups Advice"
    }
  ]
  ngOnInit() {
    this.appService.changeTab('discovery');
  }

}
