import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  tabsHead = [
    {
      title: 'Status',
      id: 'status',
      icon1: '../../../assets/img/menu_ico_7.png',
      icon2: '../../../assets/img/menu_ico_77.png',
      user : '../../../user.json',
      post : 'http://35.166.70.82/posts'
    },
    {
      title: 'Events',
      id: 'events',
      icon1: '../../../assets/img/menu_ico_8.png',
      icon2: '../../../assets/img/menu_ico_88.png',
      user : '../../../user.json',
      post : '../../../post.json'
    },
    {
      title: 'Images/Videos',
      id: 'images',
      icon1: '../../../assets/img/menu_ico_9.png',
      icon2: '../../../assets/img/menu_ico_99.png',
      user : '../../../user.json',
      post : '../../../post.json'
    }
  ];
  recUrl= '../../../recommended.json';
  adz=[
    {
      title: "California Startups Advice"
    },
    {
      title: "Chicago Startups Advice"
    }
  ]

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.changeTab('stream');
  }

}
