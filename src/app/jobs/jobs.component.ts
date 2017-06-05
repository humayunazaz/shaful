import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private appService:AppService, private router:Router) { }
  childTabs=[
    {
      name: 'discovery',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    },
    {
      name: 'my jobs',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    },
    {
      name: 'post a job',
      icon1: '../../assets/img/menu_ico_1.png',
      icon2: '../../assets/img/menu_ico_11.png'
    },
    {
      name: 'resume builder',
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
    let link = 'jobs' + '/' + value;
    this.router.navigate([link]);
  }
  ngOnInit() {
    this.appService.menuTitle('jobs');
    this.appService.changeLogin(true);
  }

}
