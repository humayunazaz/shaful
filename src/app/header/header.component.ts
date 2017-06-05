import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user;
  isLoading=true;
  error=false;
  notifi = [];
  miniMenu=false;
  mobile=false;
  username;
  login;
  sign;
  constructor(private appService:AppService, private router:Router) { }
  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.user = data;
      },
      err => {this.isLoading = false; this.error = true;},
      () => {this.isLoading = false;}
    )
  }
  logout(){
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('token');
    this.router.navigate(['login']);
    this.appService.changeLogin(false);
    location.reload();
  }
  menuToggle(){
    this.miniMenu = !this.miniMenu;
    this.appService.changeMenu(this.miniMenu);
  }
  mobileSearch(){
    this.mobile = true;
  }
  cancleSearch(){
    this.mobile = false;
  }
  gotoSignup(){
    this.router.navigate(['signup']);
  }
  gotoSignin(){
    this.router.navigate(['login']);
  }
  ngOnInit() {
    let url = '../../user.json';
    this.getContent(url);
    this.appService.emitter.subscribe(
      data => {
        this.miniMenu = data;
      }
    )
    this.appService.user.subscribe(
      data => {
        this.username = data;
      }
    )
    this.username = window.localStorage.getItem('username');
    this.appService.Login.subscribe(
      data => {
        this.login = data;
      }
    )
    this.appService.Sign.subscribe(
      data => {
        this.sign = data;
      }
    )
  }

}
