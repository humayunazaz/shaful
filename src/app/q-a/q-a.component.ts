import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q-a',
  templateUrl: './q-a.component.html',
  styleUrls: ['./q-a.component.css']
})
export class QAComponent implements OnInit {
  childTabs=[
    {
      name: 'ask question',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    },
    {
      name: 'my questions',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    },
    {
      name: 'answer questions',
      icon1: '../../assets/img/menu_ico_2.png',
      icon2: '../../assets/img/menu_ico_22.png'
    }
  ]
  constructor(private appService:AppService, private router:Router) { }

  updateValue($event){
    let value = $event.newValue;
    if(value.indexOf(" ")){
      while( value.indexOf(" ") > -1){
        value = value.replace(" ", "");
      }
    }
    let link = 'q-a' + '/' + value;
    this.router.navigate([link]);
  }

  ngOnInit() {
    this.appService.menuTitle('q & a');
    this.appService.changeLogin(true);
  }

}
