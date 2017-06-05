import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private appService:AppService, private router:Router) { }
  childTabs=[
    {
      name: 'stream',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    },
    {
      name: 'popular events',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    },
    {
      name: 'review',
      icon1: '../../assets/img/menu_ico_2.png',
      icon2: '../../assets/img/menu_ico_22.png'
    },
    {
      name: 'areas of interest',
      icon1: '../../assets/img/menu_ico_2.png',
      icon2: '../../assets/img/menu_ico_22.png'
    }
  ];

  updateValue($event){
    let value = $event.newValue;
    if(value.indexOf(" ")){
      while( value.indexOf(" ") > -1){
        value = value.replace(" ", "");
      }
    }
    let link = 'reviews' + '/' + value;
    this.router.navigate([link]);
  }

  ngOnInit() {
    this.appService.menuTitle('reviews');
    this.appService.changeLogin(true);
  }

}
