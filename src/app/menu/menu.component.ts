import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus;
  clickMenu;
  panelHide=false;
  width;

  constructor(private appService:AppService, private router:Router) { }

  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.menus = data;
      }
    )
  }
  menuClick(value){
    this.clickMenu = value;
    if(value.indexOf(" ")){
      while(value.indexOf(" ") > -1){
        value = value.replace(" ", "");
      }
    }
    if(value == "q&a"){
      value = "q-a";
    }
    this.router.navigate([value]);
  }
  gettingPanel(){
    this.appService.emitter.subscribe(
      data => {
        this.panelHide = data;
      }
    )
  }
  gettingMenuName(){
    this.appService.Title.subscribe(
      data => {
        this.clickMenu = data;
      }
    )
  }
  ngOnInit() {
    let url = '../../menu.json';
    this.getContent(url);
    this.gettingPanel();
    this.gettingMenuName();
  }

}
