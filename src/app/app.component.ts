import { Component, OnInit } from '@angular/core';
/*import * as _ from 'underscore';*/
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)' : 'onResize($event)'
  }
})
export class AppComponent implements OnInit{
  userName;
  token;
  login;

  constructor(private appService:AppService){
  }
  menuChange;
  width;
  height;

  onResize($event){
    this.width = window.innerWidth;
    this.heightFunction();
    this.changeWidth();
  }
  changeWidth(){
    let menuHide;
    if(this.width <= 991){
      menuHide = true;
      this.appService.changeMenu(menuHide);
    } else{
      menuHide = false;
      this.appService.changeMenu(menuHide);
    }
  }
  heightFunction(){
    this.height = window.innerHeight;
    if(this.height > 750){
      this.height = this.height - 108;
    } else {
      this.height = 750;
    }
  }
  ngOnInit():any{
    this.appService.emitter.subscribe(
      data => {
        this.menuChange = data;
      }
    )
    this.width = window.innerWidth;
    this.appService.getWidth(this.width);
    this.changeWidth();
    this.appService.changeLogin(false);
    this.appService.Login.subscribe(
      data => {
        this.login = data;
      }
    )
    this.height = window.innerHeight;
    this.heightFunction();
  }
}
