import { Injectable, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Injectable()
export class AuthService implements OnInit{

  constructor(private appService:AppService) { }
  loggedIn = true;
  url:'http://35.166.70.82/post';
  
  validation(){
    this.appService.getContent(this.url).subscribe(
      data => {
        this.loggedIn = true;
        console.log(this.loggedIn);
      },
      err => {
        this.loggedIn = false;
      }
    )
  }

  ngOnInit(){
    this.validation();
  }

}
