import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dating',
  templateUrl: './dating.component.html',
  styleUrls: ['./dating.component.css']
})
export class DatingComponent implements OnInit {

  constructor(private appService:AppService, private router:Router) { }
  childTabs=[
    {
      name: 'discovery',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    },
    {
      name: 'special someone',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    },
    {
      name: 'dating profile',
      icon1: '../../assets/img/menu_ico_2.png',
      icon2: '../../assets/img/menu_ico_22.png'
    },
    {
      name: 'dating requests',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    }
  ]
  updateValue($event){
    let value = $event.newValue;
    if(value.indexOf(" ")){
      while( value.indexOf(" ") > -1){
        value = value.replace(" ", "");
      }
    }
    let link = 'dating' + '/' + value;
    this.router.navigate([link]);
  }
  ngOnInit() {
    this.appService.menuTitle('dating');
    this.appService.changeLogin(true);
  }

}
