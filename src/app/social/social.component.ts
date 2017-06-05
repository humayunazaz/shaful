import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  content = 'login success fully';
  success = true;
  fail = false;
  close;
  constructor(private router:Router, private appService:AppService) { }
  childTabs=[
    {
      name: 'stream',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    },
    {
      name: 'profile',
      icon1: '../../assets/img/menu_ico_2.png',
      icon2: '../../assets/img/menu_ico_22.png'
    },
    {
      name: 'friends',
      icon1: '../../assets/img/menu_ico_3.png',
      icon2: '../../assets/img/menu_ico_33.png'
    },
    {
      name: 'photos',
      icon1: '../../assets/img/menu_ico_4.png',
      icon2: '../../assets/img/menu_ico_44.png'
    },
    {
      name: 'videos',
      icon1: '../../assets/img/menu_ico_5.png',
      icon2: '../../assets/img/menu_ico_55.png'
    }
  ]
  updateValue($event){
    let link = 'social' + '/' + $event.newValue;
    this.router.navigate([link]);
  }
  ngOnInit() {
    this.appService.menuTitle('social');
    this.appService.changeLogin(true);
    setTimeout(function(){
      this.close = true;
      console.log(this.close);
    }, 3000)
  }

}
